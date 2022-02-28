export class Vector3 {
  constructor(x,y,z) {
    this.x = x
    this.y = y
    this.z = z
  }

  scale(value) {
    return new Vector3(this.x * value, this.y * value, this.z * value)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  normalize() {
    return this.scale(1/this.length())
  }

  plus(v2) {
    return new Vector3(this.x + v2.x, this.y + v2.y, this.z + v2.z)
  }

  minus(v2) {
    return this.plus(v2.scale(-1))
  }

  cross(v2) {
    const {x: ax, y: ay, z: az} = this
    const {x: bx, y: by, z: bz} = v2
    return new Vector3(
      ay * bz - az * by,
      - (ax * bz - az * bx),
      ax * by - ay * bx
    )
  }

  dot(v2) {
    return this.x * v2.x + this.y * v2.y + this.z * v2.z
  }
}