export module '@lacuna/geoline-to-rectangle' {

  // array of array of array of numbers,... lng, lat
  declare type GepointArray = Array<Array<number>>

  // input, path of [[lng,lat]] points representing the line, and a thickness amount in meters
  declare const geolineToRectangle = async (path: GeopointPath, thickness: number) => GepointArray
}