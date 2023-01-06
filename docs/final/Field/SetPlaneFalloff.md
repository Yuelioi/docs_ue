# SetPlaneFalloff

平面标量场，将只在与平面的距离内定义。

目标是平面漂移

## 图示

![]($-20221218-19000052.png)

## Inputs

目标。平面漂移对象参考。

场的大小。Float（单精度）。平面漂移场的大小。

最小范围。Float（单精度）。0到1之间的初始函数值将在MinRange和MaxRange之间进行缩放，然后乘以幅度。

最大范围。Float（单精度）。0到1之间的初始函数值将在MinRange和MaxRange之间进行缩放，然后再乘以幅度。

默认值。Float（单精度）。如果样本投影距离（（样本位置-中心位置）.dot（平面法线））高于平面距离，该字段值将被设置为默认值。

平面距离。Float（单精度）。从中心位置开始并沿平面法线方向延伸的平面漂移场的距离限制。

中心位置。矢量。平面淡出场的平面中心位置。

平面法线。向量。平面法线的平面漂移区域。

Falloff类型。EFieldFalloffType枚举。用于模拟从平面到距离等值面的场的演变的衰减函数类型。

## Outputs

返回值。平面漂移对象参考。
Plane scalar field that will be defined only within a distance from a plane

Target is Plane Falloff

## 图示

![]($-20221218-19000052.png)

## Inputs

Target: Plane Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the plane falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to default if the sample projected distance ((Sample Position - Center Position).dot(Plane Normal)) is higher than the Plane Distance.

Plane Distance: Float (single-precision). Distance limit for the plane falloff field starting from the center position and extending in the direction of the plane normal.

Center Position: Vector. Plane center position of the plane falloff field.

Plane Normal: Vector. Plane normal of the plane falloff field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used to model the evolution of the field from the plane surface to the distance isosurface.  

## Outputs

Return Value: Plane Falloff Object Reference.

