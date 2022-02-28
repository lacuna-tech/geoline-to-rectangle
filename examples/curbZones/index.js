import {geolineToRectangle} from '@lacuna/geoline-to-rectangle'

const main = () => {

  const path = [[-122.3421581,47.6118881],[-122.3421428,47.6118791],[-122.3421167,47.6118638],[-122.3420849,47.6118454],[-122.3420556,47.6118277],[-122.3420286,47.6118121],[-122.3420133,47.6118031]]
  const rectangle = geolineToRectangle(path, 3)
  
  const outputFeature = {
    type: "Polygon",
    coordinates: [rectangle]
  }
  console.log('output is: ', JSON.stringify(outputFeature,null,4))
}

main()