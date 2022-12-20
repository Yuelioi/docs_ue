# DrawText

Draws a string on the HUD.

Target is HUD

## 图示

![]($-20221218-19162065.png)

## Inputs

In: Exec.

Target: HUD Object Reference.

Text: String. String to draw.

Text Color: Linear Color Structure. Color to draw string.

Screen X: Float (single-precision). Screen-space X coordinate of upper left corner of the string..

Screen Y: Float (single-precision). Screen-space Y coordinate of upper left corner of the string..

Font: Font Object Reference. Font to draw text. If NULL, default font is chosen..

Scale: Float (single-precision). Scale multiplier to control size of the text..

Scale Position: Boolean. Whether the "Scale" parameter should also scale the position of this draw call..  

## Outputs

Out: Exec.

