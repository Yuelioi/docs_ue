# ClampAngle

夹住一个任意的角度，使其处于给定的角度之间。将夹持到最近的边界。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19493868.png)

## Inputs

角度度数。Float（双精度）。

最小角度度数。Float（双精度）。"从 "角度，定义有效角度范围的开始（顺时针扫过）。

最大角度度数。Float（双精度）。"到 "的角度，定义了有效角度范围的终点。

## Outputs

返回值。Float（双精度）。返回夹紧的角度，范围是-180...180...。

<hr>

Clamps an arbitrary angle to be between the given angles. Will clamp to nearest boundary.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19493868.png)

## Inputs

Angle Degrees: Float (double-precision).

Min Angle Degrees: Float (double-precision). "from" angle that defines the beginning of the range of valid angles (sweeping clockwise).

Max Angle Degrees: Float (double-precision). "to" angle that defines the end of the range of valid angles.

## Outputs

Return Value: Float (double-precision). Returns clamped angle in the range -180..180..
