# SetRadialFalloff

球体标量场，将只在球体内定义。

目标是 Radial Falloff

## 图示

![](/uploads/projects/ue-bluprint/20221218-19000182.png)

## Inputs

目标。径向漂移对象参考。

场的大小。Float（单精度）。球体漂移场的幅值。

最小范围。Float（单精度）。0 和 1 之间的初始函数值将在 MinRange 和 MaxRange 之间进行缩放，然后乘以幅度。

最大范围。Float（单精度）。0 到 1 之间的初始函数值将在 MinRange 和 MaxRange 之间进行缩放，然后再乘以幅度。

默认值。Float（单精度）。如果样本与中心的距离高于半径，该字段值将被设置为默认值。

球体半径。Float（单精度）。球体漂移场的半径。

中心位置。矢量。球体消隐场的中心位置。

Falloff Type（衰减类型）。EFieldFalloffType 枚举。如果选择了 falloff 函数，则使用 falloff 函数的类型。

## Outputs

返回值。径向漂移对象参考。

<hr>

Sphere scalar field that will be defined only within a sphere

Target is Radial Falloff

## 图示

![](/uploads/projects/ue-bluprint/20221218-19000182.png)

## Inputs

Target: Radial Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the sphere falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to Default if the sample distance from the center is higher than the radius.

Sphere Radius: Float (single-precision). Radius of the sphere falloff field.

Center Position: Vector. Center position of the sphere falloff field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used if the falloff function is picked.

## Outputs

Return Value: Radial Falloff Object Reference.
