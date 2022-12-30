# DivideSplineIntoPolylineRecursiv-

给定一个阈值，递归地细分花键段，直到段列表（折线）与花键形状相匹配。

目标是花键组件

## 图示

![]($-20221218-21000871.png)

## Inputs

目标。花键组件对象参考。

沿着花键的起始距离。Float（单精度）。

沿着花键的末端距离。Float（单精度）。

坐标空间。ESplineCoordinateSpace Enum.

与花键的最大平方距离。Float（单精度）。  

## Outputs

出点。矢量的阵列。

返回值。布尔值。给定一个阈值，递归地细分花键部分，直到段列表（折线）与花键形状匹配。
