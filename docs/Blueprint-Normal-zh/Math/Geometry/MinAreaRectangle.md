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
