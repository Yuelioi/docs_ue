# BreakSlateBrushOutlineSettings

Adds a node that breaks a 'SlateBrushOutlineSettings' into its member fields

## 图示

![]($-20221218-14424578.png)

## Inputs

Slate Brush Outline Settings: Slate Brush Outline Settings Structure (by ref).  

## Outputs

Corner Radii: Vector 4 Structure. Corner Radii:. Radius in Slate Units applied to the outline at each corner. X = Top Left, Y = Top Right, Z = Bottom Right, W = Bottom Left.

Outline: Slate Color Structure. Color:. Tinting applied to the border outline..

Width: Float (single-precision). Width:. Line width in Slate Units applied to the border outline..

Rounding Type: ESlateBrushRoundingType Enum. Rounding Type:. The Rounding Type *.

Use Brush Transparency: Boolean. Use Brush Transparency:. True if we should use the owning brush's transparency as our own *.

