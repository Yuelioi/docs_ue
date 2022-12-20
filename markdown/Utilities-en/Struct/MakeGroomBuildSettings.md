# MakeGroomBuildSettings

Adds a node that create a 'GroomBuildSettings' from its members

## 图示

![]($-20221218-14545376.png)

## Inputs

Override Guides: Boolean. Override Guides:. If checked, override imported guides with generated ones..

Hair To Guide Density: Float (single-precision). Hair to Guide Density:. Density factor for converting hair into guide curve if no guides are provided..

Interpolation Quality: EGroomInterpolationQuality Enum. Interpolation Quality:. Interpolation data quality..

Interpolation Distance: EGroomInterpolationWeight Enum. Interpolation Distance:. Interpolation distance metric..

Randomize Guide: Boolean. Randomize Guide:. Randomize which guides affect a given hair strand..

Use Unique Guide: Boolean. Use Unique Guide:. Force a hair strand to be affected by a unique guide..  

## Outputs

Groom Build Settings: Groom Build Settings Structure.

