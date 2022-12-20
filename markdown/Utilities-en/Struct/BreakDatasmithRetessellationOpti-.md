# BreakDatasmithRetessellationOpti-

Adds a node that breaks a 'DatasmithRetessellationOptions' into its member fields

## 图示

![]($-20221218-14334158.png)

## Inputs

Datasmith Retessellation Options: Datasmith Retessellation Options Structure (by ref).  

## Outputs

Retessellation Rule: EDatasmithCADRetessellationRule Enum. Retessellation Rule:. Regenerate deleted surfaces during retesselate or ignore them.

Chord Tolerance: Float (single-precision). Chord Tolerance:. Maximum distance between any generated triangle and the original surface. Smaller values make more triangles..

Max Edge Length: Float (single-precision). Max Edge Length:. Maximum length of any edge in the generated triangles. Smaller values make more triangles..

Normal Tolerance: Float (single-precision). Normal Tolerance:. Maximum angle between adjacent triangles. Smaller values make more triangles..

Stitching Technique: EDatasmithCADStitchingTechnique Enum. Stitching Technique:. Stitching technique applied on model before tessellation. Sewing could impact number of objects..

