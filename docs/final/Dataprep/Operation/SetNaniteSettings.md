# SetNaniteSettings

为选定的网格设置Nanite设置

目标是Dataprep操作库

## 图示

![]($-20221218-18360343.png)

## Inputs

在。执行。

在选定的对象中。对象参考数组。要处理的对象数组。

在 启用。布尔值。如果为真，纳米数据将被生成。

在位置精度。整数。步长为2^(-PositionPrecision)cm。MIN_int32是自动的。

在三角形百分比中。Float（单精度）。保持LOD0的三角形的百分比。1.0=不减少，0.0=没有三角形。 

## Outputs

输出。执行：执行。

Out Modified Objects。对象引用数组。被处理的网格将被添加到的修改对象列表。

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

