# GetValidPerchRadius

Returns the radius within which we can stand on the edge of a surface without falling (if this is a walkable surface).. Simply computed as the capsule radius minus the result of GetPerchRadiusThreshold().

Target is Character Movement Component

## 图示

![]($-20221218-20182740.png)

## Inputs

Target: Character Movement Component Object Reference.  

## Outputs

Return Value: Float (single-precision). Returns the radius within which we can stand on the edge of a surface without falling (if this is a walkable surface).. Simply computed as the capsule radius minus the result of GetPerchRadiusThreshold()..

