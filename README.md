# Rectangles

> x and y starts from the top left corner

- fillRect(x, y, width, height);
  - create a solid rectangle
- strokeRect(x, y, width, height);
  - a rectangular outline
- clearRect(x, y, width, height);
  - Makes the rectangular region transparent, like it's been erased.


# Paths
> When you call `fill()` or `stroke()`, it will affect all items drawn up to the last time you called `beginPath()` and override previous fill() or stroke() function. Hence, it's important to note that you're begining a new Path/drawing.
- beginPath()
  - Indicates a new path is about to be created.
- closePath()
 - Ends the current paths and draws a straight line to join to the beginPath
 - Except if your `closePath` ends on the same place as `beginPath`
 - So, it's basically used for tidying up, especially in `stroke()`. It's not required in `fill()`
- stroke()
  - Draws outline
- fill()
 - Draws solid shape.

## Triangles
> There is no function for this, but it can be achieved with the combination of `moveTo` and `lineTo`.

- moveTo(x, y)
  - The first point.
- lineTo(x, y)
  - Where to draw to, starting from the last point indicated.