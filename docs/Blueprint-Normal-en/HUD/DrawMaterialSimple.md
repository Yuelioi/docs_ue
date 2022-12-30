# DrawMaterialSimple

Draws a material-textured quad on the HUD. Assumes UVs such that the entire material is shown.

Target is HUD

## 图示

![]($-20221218-19161721.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Material: Material Interface Object Reference. Material to use.

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the quad..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the quad..

Screen W: Float (single-precision). Screen-space width of the quad (in pixels)..

Screen H: Float (single-precision). Screen-space height of the quad (in pixels)..

Scale: Float (single-precision). Amount to scale the entire texture (horizontally and vertically).

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..  

## Outputs

Out: Exec.

