# FilterbySize

根据几何尺寸对阵列进行过滤。

目标是Datasmith数据准备过滤库

## 图示

![]($-20221218-18354378.png)

## Inputs

目标数组。对象引用的数组。要过滤的actors或StaticMeshes数组。该数组将不会改变。

尺寸来源。EDataprepSizeSource枚举。参考尺寸。

过滤模式。EDataprepSizeFilterMode枚举。如何将对象尺寸与阈值进行比较。

阈值。浮点数（单精度）。限制值。 

## Outputs

返回值。对象引用的数组。过滤后的列表...
