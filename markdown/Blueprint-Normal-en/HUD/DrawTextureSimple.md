# DrawTextureSimple

Draws a textured quad on the HUD. Assumes 1:1 texel density.

Target is HUD

## 图示

![]($-20221218-19162297.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Texture: Texture Object Reference. Texture to draw..

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Scale: Float (single-precision). Scale multiplier to control size of the text..

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..  

## Outputs

Out: Exec.

