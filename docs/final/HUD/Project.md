# Project

将三维世界空间矢量转换为二维屏幕坐标

目标是HUD

## 图示

![]($-20221218-19163112.png)

## Inputs

目标：HUD对象参考。

地点：向量。矢量。要转换的世界空间位置。

钳制到零平面。布尔值。如果为真，观察平面（-Z）后面的2D屏幕坐标将把Z设置为0（不包括X和Y）。  

## Outputs

返回值。矢量。转换后的向量。

Transforms a 3D world-space vector into 2D screen coordinates

Target is HUD

## 图示

![]($-20221218-19163112.png)

## Inputs

Target: HUD Object Reference.

Location: Vector. The world-space position to transform.

Clamp to Zero Plane: Boolean. If true, 2D screen coordinates behind the viewing plane (-Z) will have Z set to 0 (leaving X and Y alone).  

## Outputs

Return Value: Vector. The transformed vector.

