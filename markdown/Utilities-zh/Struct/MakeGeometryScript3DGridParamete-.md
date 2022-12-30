# MakeGeometryScript3DGridParamete-

添加一个节点，从其成员中创建一个 "GeometryScript3DGridParameters"。

## 图示

![]($-20221218-14534932.png)

## Inputs

尺寸方法。EGeometryScriptGridSizingMethod Enum.尺寸方法:.SizeMethod决定了如何解释下面的参数来定义3D采样/体素网格的大小。

网格单元大小。Float (single-precision).网格单元尺寸：。使用特定的网格单元尺寸，构建一个尺寸大到足以包含目标对象的网格。

网格分辨率。整数。网格分辨率：。使用一个特定的网格分辨率，网格单元的大小从目标对象的边界中得到，这样，这就是沿最长的盒子尺寸的单元数。  

## Outputs

Geometry Script 3DGrid Parameters:Geometry Script 3DGrid Parameters 结构。
