# DrawText

Draws text on the Canvas.

Target is Canvas

## 图示

![]($-20221218-18144551.png)

## Inputs

In: Exec.

Target: Canvas Object Reference.

Render Font: Font Object Reference. Font to use when rendering the text. If this is null, then a default engine font is used..

Render Text: String. Text to render on the Canvas..

Screen Position: Vector 2D Structure. Screen space position to render the text..

Scale: Vector 2D Structure.

Render Color: Linear Color Structure. Color to render the text..

Kerning: Float (single-precision). Horizontal spacing adjustment to modify the spacing between each letter..

Shadow Color: Linear Color Structure. Color to render the shadow of the text..

Shadow Offset: Vector 2D Structure. Pixel offset relative to the screen space position to render the shadow of the text..

Centre X: Boolean. If true, then interpret the screen space position X coordinate as the center of the rendered text..

Centre Y: Boolean. If true, then interpret the screen space position Y coordinate as the center of the rendered text..

Outlined: Boolean. If true, then the text should be rendered with an outline..

Outline Color: Linear Color Structure. Color to render the outline for the text..  

## Outputs

Out: Exec.

