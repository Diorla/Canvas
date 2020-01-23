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

## Arcs
> Drawing arcs and of course, if you draw an arc long enough you form a circle

- arc(x, y, radius, startAngle, endAngle, anticlockwise)
  - x and y indicates the starting position.
  - startAngle and endAngle indicates where to start and end along the 360 deg. If you start at zero and end at 360, that's a circle of course.
  - anticlockwise decides the direction of drawing. It may the difference between a happy face and a sad face.
- arcTo(x1, y1, x2, y2, radius)
  - 