# ConvertSplinetoPolyLine

给定一个阈值，返回一个沿花键的顶点列表，该列表被视为一个线段（polyline）的列表，与花键形状相匹配。

目标是花键组件

## 图示

![]($-20221218-21000747.png)

## Inputs

目标。花键组件对象参考。

坐标空间。ESplineCoordinateSpace Enum.

与花键的最大平方距离。Float（单精度）。  

## Outputs

出点。矢量的阵列。

返回值。布尔值。给定一个阈值，返回一个沿花键的顶点列表，该列表被视为一个线段列表（折线），与花键形状匹配。

Given a threshold, returns a list of vertices along the spline that, treated as a list of segments (polyline), matches the spline shape.

Target is Spline Component

## 图示

![]($-20221218-21000747.png)

## Inputs

Target: Spline Component Object Reference.

Coordinate Space: ESplineCoordinateSpace Enum.

Max Square Distance from Spline: Float (single-precision).  

## Outputs

Out Points: Array of Vectors.

Return Value: Boolean. Given a threshold, returns a list of vertices along the spline that, treated as a list of segments (polyline), matches the spline shape..

