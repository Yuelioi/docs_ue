# MakeDatasmithRetessellationOptio-

Adds a node that create a 'DatasmithRetessellationOptions' from its members

## 图示

![]($-20221218-14500926.png)

## Inputs

Retessellation Rule: EDatasmithCADRetessellationRule Enum. Retessellation Rule:. Regenerate deleted surfaces during retesselate or ignore them.

Chord Tolerance: Float (single-precision). Chord Tolerance:. Maximum distance between any generated triangle and the original surface. Smaller values make more triangles..

Max Edge Length: Float (single-precision). Max Edge Length:. Maximum length of any edge in the generated triangles. Smaller values make more triangles..

Normal Tolerance: Float (single-precision). Normal Tolerance:. Maximum angle between adjacent triangles. Smaller values make more triangles..

Stitching Technique: EDatasmithCADStitchingTechnique Enum. Stitching Technique:. Stitching technique applied on model before tessellation. Sewing could impact number of objects..  

## Outputs

Datasmith Retessellation Options: Datasmith Retessellation Options Structure.

