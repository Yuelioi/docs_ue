# DrawTexture

Draws a texture on the Canvas.

Target is Canvas

## 图示

![]($-20221218-18144687.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Texture: Texture Object Reference. Texture to use when rendering. If no texture is set then this will use the default white texture..

Screen Position: Vector 2D Structure. Screen space position to render the texture..

Screen Size: Vector 2D Structure. Screen space size to render the texture..

Coordinate Position: Vector 2D Structure. Normalized UV starting coordinate to use when rendering the texture..

Coordinate Size: Vector 2D Structure. Normalized UV size coordinate to use when rendering the texture..

Render Color: Linear Color Structure. Color to use when rendering the texture..

Blend Mode: EBlendMode Enum. Blending mode to use when rendering the texture..

Rotation: Float (single-precision). Rotation, in degrees, to render the texture..

Pivot Point: Vector 2D Structure. Normalized pivot point to use when rotating the texture..  

## Outputs

Out: Exec.

