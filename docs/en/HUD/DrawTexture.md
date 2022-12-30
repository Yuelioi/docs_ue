# DrawTexture

Draws a textured quad on the HUD.

Target is HUD

## 图示

![]($-20221218-19162182.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Texture: Texture Object Reference. Texture to draw..

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Screen W: Float (single-precision). Screen-space width of the quad (in pixels)..

Screen H: Float (single-precision). Screen-space height of the quad (in pixels)..

Texture U: Float (single-precision). Texture-space U coordinate of upper left corner of the quad.

Texture V: Float (single-precision). Texture-space V coordinate of upper left corner of the quad..

Texture UWidth: Float (single-precision). Texture-space width of the quad (in normalized UV distance)..

Texture VHeight: Float (single-precision). Texture-space height of the quad (in normalized UV distance)..

Tint Color: Linear Color Structure. Vertex color for the quad..

Blend Mode: EBlendMode Enum. Controls how to blend this quad with the scene. Translucent by default..

Scale: Float (single-precision). Amount to scale the entire texture (horizontally and vertically).

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..

Rotation: Float (single-precision). Amount to rotate this quad.

Rot Pivot: Vector 2D Structure. Location (as proportion of quad, 0-1) to rotate about.  

## Outputs

Out: Exec.

