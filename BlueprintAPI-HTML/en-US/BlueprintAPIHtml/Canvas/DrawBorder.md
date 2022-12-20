# DrawBorder

Draws a 3x3 grid border with tiled frame and tiled interior on the Canvas.

Target is Canvas

## 图示

![]($-20221218-18143739.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Border Texture: Texture Object Reference. Texture to use for border..

Background Texture: Texture Object Reference. Texture to use for border background..

Left Border Texture: Texture Object Reference. Texture to use for the tiling left border..

Right Border Texture: Texture Object Reference. Texture to use for the tiling right border..

Top Border Texture: Texture Object Reference. Texture to use for the tiling top border..

Bottom Border Texture: Texture Object Reference. Texture to use for the tiling bottom border..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the border texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the border texture..

Render Color: Linear Color Structure. Color to tint the border..

Border Scale: Vector 2D Structure. Scale of the border..

Background Scale: Vector 2D Structure. Scale of the background..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..

Corner Size: Vector 2D Structure. Frame corner size in percent of frame texture (should be < 0.5f)..  

## Outputs

Out: Exec.

