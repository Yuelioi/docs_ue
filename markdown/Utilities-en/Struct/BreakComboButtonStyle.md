# BreakComboButtonStyle

Adds a node that breaks a 'ComboButtonStyle' into its member fields

## 图示

![]($-20221218-14323938.png)

## Inputs

Combo Button Style: Combo Button Style Structure (by ref).  

## Outputs

Button Style: Button Style Structure. Button Style:. The style to use for our SButton..

Down Arrow Image: Slate Brush Structure. Down Arrow Image:. Image to use for the down arrow..

Shadow Offset: Vector 2D Structure. Shadow Offset:. How much should the shadow be offset for the down arrow?. An offset of 0 implies no shadow..

Shadow Color And Opacity: Linear Color Structure. Shadow Color and Opacity:. The color and opacity of the shadow for the down arrow.. Only active if ShadowOffset is not (0,0)..

Menu Border Brush: Slate Brush Structure. Menu Border Brush:. Brush to use to add a "menu border" around the drop-down content..

Menu Border Padding: Margin Structure. Menu Border Padding:. Padding to use to add a "menu border" around the drop-down content..

Content Padding: Margin Structure. Content Padding:: Button Content Padding.

Down Arrow Padding: Margin Structure. Down Arrow Padding:: Dropdown arrow padding (if a dropdown arrow exists).

Down Arrow Align: EVerticalAlignment Enum. Down Arrow Align:: Dropdown arrow vertical alignment.

