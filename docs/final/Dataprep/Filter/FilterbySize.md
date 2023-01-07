# FilterbySize

根据几何尺寸对阵列进行过滤。

目标是 Datasmith 数据准备过滤库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18354378.png)

## Inputs

目标数组。对象引用的数组。要过滤的 actors 或 StaticMeshes 数组。该数组将不会改变。

尺寸来源。EDataprepSizeSource 枚举。参考尺寸。

过滤模式。EDataprepSizeFilterMode 枚举。如何将对象尺寸与阈值进行比较。

阈值。浮点数（单精度）。限制值。

## Outputs

返回值。对象引用的数组。过滤后的列表...

<hr>

Filter the array based on the geometry size.

Target is Datasmith Data Preparation Filter Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18354378.png)

## Inputs

Target Array: Array of Object References. Array of Actors or StaticMeshes to filter. The array will not change..

Size Source: EDataprepSizeSource Enum. The reference dimension.

Filter Mode: EDataprepSizeFilterMode Enum. How to compare the object size with the threshold.

Threshold: Float (single-precision). Limit value.

## Outputs

Return Value: Array of Object References. The filtered list..
