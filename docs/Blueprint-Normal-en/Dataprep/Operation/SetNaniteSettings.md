# SetNaniteSettings

Set Nanite settings for selected meshes

Target is Dataprep Operations Library

## 图示

![]($-20221218-18360343.png)

## Inputs

In: Exec.

In Selected Objects: Array of Object References. Array of objects to process..

In Enabled: Boolean. If true, Nanite data will be generated..

In Position Precision: Integer. Step size is 2^(-PositionPrecision) cm. MIN_int32 is auto..

In Percent Triangles: Float (single-precision). Percentage of triangles to keep from LOD0. 1.0 = no reduction, 0.0 = no triangles..  

## Outputs

Out: Exec.

Out Modified Objects: Array of Object References. List of modified objects the processed meshes will be added to.

