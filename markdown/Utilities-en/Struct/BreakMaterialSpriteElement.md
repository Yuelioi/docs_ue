# BreakMaterialSpriteElement

Adds a node that breaks a 'MaterialSpriteElement' into its member fields

## 图示

![]($-20221218-14394531.png)

## Inputs

Material Sprite Element: Material Sprite Element Structure (by ref).  

## Outputs

Material: Material Interface Object Reference. Material:. The material that the sprite is rendered with..

Distance To Opacity Curve: Curve Float Object Reference. Distance to Opacity Curve:. A curve that maps distance on the X axis to the sprite opacity on the Y axis..

Size Is In Screen Space: Boolean. Size Is in Screen Space:. Whether the size is defined in screen-space or world-space..

Base Size X: Float (single-precision). Base Size X:. The base width of the sprite, multiplied with the DistanceToSizeCurve..

Base Size Y: Float (single-precision). Base Size Y:. The base height of the sprite, multiplied with the DistanceToSizeCurve..

Distance To Size Curve: Curve Float Object Reference. Distance to Size Curve:. A curve that maps distance on the X axis to the sprite size on the Y axis..

