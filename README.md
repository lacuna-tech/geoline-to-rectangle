# geoline-to-rectangle
Given a line of geopoints, of the form [[longitude, latitude]], geoline-to-rectangle will thicken the line to be rectangular, with configurable width.

### In Node.js
``` sh
pnpm install @lacuna/geoline-to-rectangle
```

## Simple Usage
```ts
//some typescript todo
import { geolineToRectangle } from '@lacuna/geoline-toRectangle'

const point1 = [longitude1, latitude1] //longitude first, then latitude
const point2 = [longitude2, latitude2]

const rectangleOutput = geolineToRectangle([point1, point2])
```

