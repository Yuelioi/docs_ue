# RandomUnitVectorinEllipticalCone-_2

返回一个长度为1的随机向量，在指定的圆锥体内，具有均匀的随机分布。圆锥体的形状可以根据偏航角和俯仰角来修改。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19541135.png)

## Inputs

Cone Dir: Vector.

最大偏航，单位是弧度。Float（单精度）。圆锥体的偏航角度（从ConeDir到水平边缘），单位是弧度。

最大间距，单位是弧度。Float（单精度）。圆锥体的俯仰角（从ConeDir到垂直边缘），单位是弧度。

## Outputs

返回值。向量。
