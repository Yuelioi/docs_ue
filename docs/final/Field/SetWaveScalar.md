# SetWaveScalar

根据样本与现场位置的距离，设置一个时间波标度值。

目标是波浪形标量

## 图示

![](/uploads/projects/ue-bluprint/20221218-19001364.png)

## Inputs

目标。波形标量对象参考。

字段大小。浮点数（单精度）。波函数的幅值。

中心位置。矢量。波场的中心位置。

波长。浮点数（单精度）。2 个波峰之间的距离。

波动周期。Float（单精度）。波浪从一个波峰到另一个波峰所需的时间。波速与波长/周期成正比。

波浪函数。EWaveFunctionType 枚举。用于该领域的波浪函数。

漂移类型。EFieldFalloffType 枚举。如果选择了 falloff 函数，则使用 falloff 函数的类型。

## Outputs

返回值。Wave Scalar 对象参考。

<hr>

Set a temporal wave scalar value according to the sample distance from the field position.

Target is Wave Scalar

## 图示

![](/uploads/projects/ue-bluprint/20221218-19001364.png)

## Inputs

Target: Wave Scalar Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the wave function.

Center Position: Vector. Center position of the wave field.

Wave Length: Float (single-precision). Distance between 2 wave peaks.

Wave Period: Float (single-precision). Time over which the wave will travel from one peak to another one. The wave velocity is proportional to wavelength/period.

Wave Function: EWaveFunctionType Enum. Wave function used for the field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used if the falloff function is picked.

## Outputs

Return Value: Wave Scalar Object Reference.
