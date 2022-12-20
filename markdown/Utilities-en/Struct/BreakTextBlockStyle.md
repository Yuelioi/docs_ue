# BreakTextBlockStyle

Adds a node that breaks a 'TextBlockStyle' into its member fields

## 图示

![]($-20221218-14442336.png)

## Inputs

Text Block Style: Text Block Style Structure (by ref).  

## Outputs

Font: Slate Font Info Structure. Font:. Font family and size to be used when displaying this text..

Color: Slate Color Structure. Color and Opacity:. The color and opacity of this text.

Shadow Offset: Vector 2D Structure. Shadow Offset:. How much should the shadow be offset? An offset of 0 implies no shadow..

Shadow Color And Opacity: Linear Color Structure. Shadow Color and Opacity:. The color and opacity of the shadow.

Highlight Color: Slate Color Structure. Highlight Color:. The color of highlighted text.

Highlight Shape: Slate Brush Structure. Highlight Shape:. The shape of highlighted text.

Strike Brush: Slate Brush Structure. Strike Brush:. The brush used to draw an strike through the text (if any).

Underline Brush: Slate Brush Structure. Underline Brush:. The brush used to draw an underline under the text (if any).

Transform Policy: ETextTransformPolicy Enum. Transform Policy:. The Text Transform Policy (defaults to None).

Overflow Policy: ETextOverflowPolicy Enum. Overflow Policy:. Determines what happens to text that is clipped and doesn't fit within the clip rect of a text widget.

