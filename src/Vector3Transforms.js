import { Vector3 } from './Vector3.js'

const r_earth_km = 6378.137
const r_earth = r_earth_km * 1000

const deg2rad = (deg) => deg * Math.PI/180
const rad2Deg = (rad) => rad * 180/Math.PI

export const geopointToVector3 = (geo) => {
  const lat = deg2rad(geo.latitude)
  const lng = deg2rad(geo.longitude)
  const x = r_earth * Math.cos(lat) * Math.cos(lng)
  const y = r_earth * Math.cos(lat) * Math.sin(lng)
  const z = r_earth * Math.sin(lat)
  return new Vector3(x,y,z)
}

export const vector3ToLatLng = (vector) => {
  const length = vector.length()
  const lat = Math.asin(vector.z / length)
  const lng = Math.atan2(vector.y, vector.x)
  return {latitude: rad2Deg(lat), longitude: rad2Deg(lng)}
}