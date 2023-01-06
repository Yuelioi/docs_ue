# MinAreaRectangle

找到包围一组共面点的最小面积矩形。使用http://www.geometrictools.com/Documentation/MinimumAreaRectangle.pdf 中的穷举搜索算法

目标是Kismet数学图书馆

## 图示

![]($-20221218-19503479.png)

## Inputs

在。执行。

在点。矢量的阵列。包围在矩形中的点；为了获得正确的结果，需要在同一平面内。

样品表面法线。矢量（通过参考）。表示点的表面方向的法线。

调试绘图。布尔值。为调试目的绘制输出矩形，前提是世界背景也被设置。  

## Outputs

出：执行。

矩形中心外。矢量。从原点开始输出矩形的翻译。

Out Rect Rotation:旋转器。从XY平面输出的矩形的旋转。

Out Rect Length X:Float（单精度）。旋转前沿X轴输出的矩形的长度。

Out Rect Length Y: Float（单精度）。旋转前输出的矩形沿Y轴的长度。

Finds the minimum area rectangle that encloses a set of coplanar points.. Uses the exhaustive search algorithm in http://www.geometrictools.com/Documentation/MinimumAreaRectangle.pdf

Target is Kismet Math Library

## 图示

![]($-20221218-19503479.png)

## Inputs

In: Exec.

In Points: Array of Vectors. Points to enclose in the rectangle; need to be within the same plane for correct results.

Sample Surface Normal: Vector (by ref). Normal indicating the surface direction for the points.

Debug Draw: Boolean. Draws the output rectangle for debugging purposes provided the world context is set as well.  

## Outputs

Out: Exec.

Out Rect Center: Vector. Translation for the output rectangle from the origin.

Out Rect Rotation: Rotator. Rotation for the output rectangle from the XY plane.

Out Rect Length X: Float (single-precision). Length of the output rectangle along the X axis before rotation.

Out Rect Length Y: Float (single-precision). Length of the output rectangle along the Y axis before rotation.

