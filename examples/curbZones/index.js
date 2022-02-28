import fs from 'fs'
import {geolineToRectangle} from '@lacuna/geoline-to-rectangle'

const main = () => {
  const data = JSON.parse(fs.readFileSync('./input/curbZones.json', {encoding: 'utf-8'}))
  const zones = {}
  
  

}