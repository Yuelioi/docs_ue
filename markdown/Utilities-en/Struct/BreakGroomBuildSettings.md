# BreakGroomBuildSettings

Adds a node that breaks a 'GroomBuildSettings' into its member fields

## 图示

![]($-20221218-14374951.png)

## Inputs

Groom Build Settings: Groom Build Settings Structure (by ref).  

## Outputs

Override Guides: Boolean. Override Guides:. If checked, override imported guides with generated ones..

Hair To Guide Density: Float (single-precision). Hair to Guide Density:. Density factor for converting hair into guide curve if no guides are provided..

Interpolation Quality: EGroomInterpolationQuality Enum. Interpolation Quality:. Interpolation data quality..

Interpolation Distance: EGroomInterpolationWeight Enum. Interpolation Distance:. Interpolation distance metric..

Randomize Guide: Boolean. Randomize Guide:. Randomize which guides affect a given hair strand..

Use Unique Guide: Boolean. Use Unique Guide:. Force a hair strand to be affected by a unique guide..

