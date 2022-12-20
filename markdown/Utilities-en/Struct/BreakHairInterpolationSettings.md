# BreakHairInterpolationSettings

Adds a node that breaks a 'HairInterpolationSettings' into its member fields

## 图示

![]($-20221218-14375830.png)

## Inputs

Hair Interpolation Settings: Hair Interpolation Settings Structure (by ref).  

## Outputs

Override Guides: Boolean. Override Guides:. If checked, override imported guides with generated ones..

Hair To Guide Density: Float (single-precision). Hair to Guide Density:. Density factor for converting hair into guide curve if no guides are provided. The value should be between 0 and 1, and can be thought as a ratio/percentage of strands used as guides..

Interpolation Quality: EHairInterpolationQuality Enum. Interpolation Quality:. Interpolation data quality..

Interpolation Distance: EHairInterpolationWeight Enum. Interpolation Distance:. Interpolation distance metric..

Randomize Guide: Boolean. Randomize Guide:. Randomize which guides affect a given hair strand..

Use Unique Guide: Boolean. Use Unique Guide:. Force a hair strand to be affected by a unique guide..

