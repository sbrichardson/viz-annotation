
export default class Annotation {
  x: number
  y: number
  dx: number
  dy: number
  text: string
  title: string
  data: Object

  constructor({ x, y, dy, dx, text, title, data }) {
    //super() calls parent's constructor
    this.x = x || 0
    this.y = y || 0
    this.dx = dx || 0
    this.dy = dy || 0
    this.text = text
    this.title = title
    this.data = data || {}

  }

  get position() { return { x: this.x, y: this.y }}

  set position({x, y}) {
    this.x = x
    this.y = y
  }

  get translation() { return {
    x: this.x + this.dx,
    y: this.y + this.dy
  }}

  get json() { return {
      x: this.x,
      y: this.y,
      dx: this.dx,
      dy: this.dy,
      text: this.text,
      title: this.title,
      data: this.data
   }}

}
