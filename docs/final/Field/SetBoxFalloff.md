# SetBoxFalloff

箱体标量字段，只在箱体内定义

目标是箱体滑移

## 图示

![](/uploads/projects/ue-bluprint/20221218-18595130.png)

## Inputs

目标：箱体漂移对象参考。

字段大小。Float（单精度）。盒状衰减字段的幅度。

最小范围。Float（单精度）。0 和 1 之间的初始函数值将在 MinRange 和 MaxRange 之间进行缩放，然后乘以幅度。

最大范围。Float（单精度）。0 到 1 之间的初始函数值将在 MinRange 和 MaxRange 之间进行缩放，然后再乘以幅度。

默认值。Float（单精度）。如果样本与箱体的距离高于变换的比例，该字段值将被设置为默认值。

箱体变换。变换。单位箱体的平移、旋转和比例。

Falloff 类型。EFieldFalloffType 枚举。用于模拟场从箱体表面到样本位置的演变的衰减函数类型。

## Outputs

返回值。箱体衰减对象参考。

<hr>

Box scalar field that will be defined only within a box

Target is Box Falloff

## 图示

![](/uploads/projects/ue-bluprint/20221218-18595130.png)

## Inputs

Target: Box Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the box falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to Default if the sample distance from the box is higher than the scale of the transform.

Box Transform: Transform. Translation, Rotation and Scale of the unit box.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used to model the evolution of the field from the box surface to the sample position.

## Outputs

Return Value: Box Falloff Object Reference.
