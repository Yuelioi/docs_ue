# FilterbySize

Filter the array based on the geometry size.

Target is Datasmith Data Preparation Filter Library

## 图示

![]($-20221218-18354378.png)

## Inputs

Target Array: Array of Object References. Array of Actors or StaticMeshes to filter. The array will not change..

Size Source: EDataprepSizeSource Enum. The reference dimension.

Filter Mode: EDataprepSizeFilterMode Enum. How to compare the object size with the threshold.

Threshold: Float (single-precision). Limit value.  

## Outputs

Return Value: Array of Object References. The filtered list..

