# DrawMaterial

Draws a material on the Canvas.

Target is Canvas

## 图示

![]($-20221218-18144151.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Material: Material Interface Object Reference. Material to use when rendering. Remember that only the emissive channel is able to be rendered as no lighting is performed when rendering to the Canvas..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the texture..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..  

## Outputs

Out: Exec.

