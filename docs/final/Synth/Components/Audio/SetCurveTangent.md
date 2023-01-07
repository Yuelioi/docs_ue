# SetCurveTangent

设置曲线的切线（关键帧之间的 "曲线深度"）。这应该只用于实时编辑的功能(在运行时改变曲线的成本很高)

目标是合成器组件单声道波形表

## 图示

![](/uploads/projects/ue-bluprint/20221218-21070886.png)

## Inputs

在。执行。

目标。Synth Component Mono Wave Table 对象参考。

表的索引。整数。

在新唐人。Float（单精度）。

## Outputs

出：执行。

返回值。布尔值。设置曲线的切线（关键帧之间的 "曲线深度"）。这应该只用于实时编辑的功能(在运行时改变曲线是很昂贵的)。

<hr>

Set the curve tangent ("Curve depth" between keyframes). This should only be used for live-editing features! (changing the curves at runtime is expensive)

Target is Synth Component Mono Wave Table

## 图示

![](/uploads/projects/ue-bluprint/20221218-21070886.png)

## Inputs

In: Exec.

Target: Synth Component Mono Wave Table Object Reference.

Table Index: Integer.

In New Tangent: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Boolean. Set the curve tangent ("Curve depth" between keyframes). This should only be used for live-editing features! (changing the curves at runtime is expensive).
