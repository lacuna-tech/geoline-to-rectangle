const longLatArrToObj = ([longitude, latitude]) => ({latitude, longitude})
const longLatObjToArr = ({longitude, latitude}) => [longitude, latitude]

export const geolineToRectangle = (path, meters) => {
  if (path.length < 2) {
    console.error('degenerate path', path, 'should have more points!')
    return path
  }
  
  const thickenOrthBasis = (aLatLngArray, bLatLngArray) => {
    const aLatLng = longLatArrToObj(aLatLngArray)
    const bLatLng = longLatArrToObj(bLatLngArray)

    const a = geopointToVector3(aLatLng)
    const b = geopointToVector3(bLatLng)
   
    const dir = b.minus(a).normalize()
    const axis = a.normalize().scale(-1)
    const orth = dir.cross(axis)

    const p1 = orth.scale(meters * 0.5).plus(a)
    const p2 = orth.scale(meters * -0.5).plus(a)

    const p1LatLng = vector3ToLatLng(p1)
    const p2LatLng = vector3ToLatLng(p2)

    return [longLatObjToArr(p1LatLng), longLatObjToArr(p2LatLng)]
  }
  const pairs = []
  for (let i = 0; i < path.length - 1; i++) {
    pairs.push(thickenOrthBasis(path[i], path[i+1]))
  }
  const finalPair = thickenOrthBasis(path[path.length - 1], path[path.length - 2])
  pairs.push([finalPair[1], finalPair[0]])
  
  const outPath = []
  for (let i = 0; i < pairs.length; i++) {
    outPath[i] = pairs[i][0]
    outPath[pairs.length * 2 - (i + 1)] = pairs[i][1]
  }
  outPath.push(pairs[0][0])
  return outPath
}