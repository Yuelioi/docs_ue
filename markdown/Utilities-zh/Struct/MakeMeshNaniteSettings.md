# MakeMeshNaniteSettings

添加一个节点，从其成员中创建一个 "MeshNaniteSettings"。

## 图示

![]($-20221218-14573978.png)

## Inputs

已启用。布尔型。启用：。如果为真，将生成纳米特数据。

位置精度。整数。位置精度:。位置精度。步长为2^(-PositionPrecision)cm。MIN_int32是自动的。

保持三角形的百分比。Float (single-precision).Keep Percent Triangles:保留三角形的百分比。保留源网格中三角形的百分比。1.0 = 不减少，0.0 = 不保留三角形。

修剪相对误差。Float (single-precision).Trim Relative Error:（修剪相对误差）。减少，直到相对于网格的大小至少达到这个误差量。

回退百分比三角形。Float (single-precision).Fallback Percent Triangles:.回退三角形百分比。保留源网格中三角形的百分比。1.0 = 不减少，0.0 = 不保留三角形。

回落相对误差。Float (single-precision).Fallback Relative Error:。减少，直到相对于网格的大小至少达到这个误差量。  

## Outputs

网状纳米石的设置。网状纳米石设置结构。
