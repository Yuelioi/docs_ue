# MakeSlateBrushOutlineSettings

Adds a node that create a 'SlateBrushOutlineSettings' from its members

## 图示

![]($-20221218-15012451.png)

## Inputs

Corner Radii: Vector 4 Structure. Corner Radii:. Radius in Slate Units applied to the outline at each corner. X = Top Left, Y = Top Right, Z = Bottom Right, W = Bottom Left.

Outline: Slate Color Structure. Color:. Tinting applied to the border outline..

Width: Float (single-precision). Width:. Line width in Slate Units applied to the border outline..

Rounding Type: ESlateBrushRoundingType Enum. Rounding Type:. The Rounding Type *.

Use Brush Transparency: Boolean. Use Brush Transparency:. True if we should use the owning brush's transparency as our own *.  

## Outputs

Slate Brush Outline Settings: Slate Brush Outline Settings Structure.

