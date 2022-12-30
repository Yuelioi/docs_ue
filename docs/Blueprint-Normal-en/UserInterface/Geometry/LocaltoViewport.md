# LocaltoViewport

Translates local coordinate of the geometry provided into local viewport coordinates.

Target is Slate Blueprint Library

## 图示

![]($-20221218-21215434.png)

## Inputs

Geometry: Geometry Structure (by ref).

Local Coordinate: Vector 2D Structure.  

## Outputs

Pixel Position: Vector 2D Structure. The position in the game's viewport, usable for line traces and other uses where you need a coordinate in the space of viewport resolution units..

Viewport Position: Vector 2D Structure. The position in the space of other widgets in the viewport. Like if you wanted to add another widget to the viewport at the same position in viewport space as this location, this is what you would use..

