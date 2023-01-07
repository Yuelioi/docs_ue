# SetCurveValue

设置一个关键帧值，给定一个表号和关键帧号。如果请求无效，则返回 false。新值将从+/-1.0 被夹紧。

目标是合成器组件单声道波形表

## 图示

![](/uploads/projects/ue-bluprint/20221218-21071006.png)

## Inputs

在。执行。

目标。Synth Component Mono Wave Table 对象参考。

表的索引。整数。

关键帧索引。整数。

新值。Float（单精度）。

## Outputs

出：执行。

返回值。布尔值。设置一个关键帧值，给定一个表号和关键帧号。如果请求无效，则返回 false。NewValue 将在+/-1.0 的范围内夹紧。

<hr>

Set a Keyframe value given a Table number and Keyframe number.. Returns false if the request was invalid.. NewValue will be clamped from +/- 1.0

Target is Synth Component Mono Wave Table

## 图示

![](/uploads/projects/ue-bluprint/20221218-21071006.png)

## Inputs

In: Exec.

Target: Synth Component Mono Wave Table Object Reference.

Table Index: Integer.

Keyframe Index: Integer.

New Value: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Boolean. Set a Keyframe value given a Table number and Keyframe number.. Returns false if the request was invalid.. NewValue will be clamped from +/- 1.0.
