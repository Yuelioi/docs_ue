# VInterpTo

试图根据与当前位置的距离达到目标，在追踪位置时给人一种很好的平稳感觉。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19513617.png)

## Inputs

目前。矢量。实际位置。

目标。矢量。目标位置。

三角洲时间。浮点数（单精度）。自最后一次打钩以来的时间。

互调速度。浮点数（单精度）。插值速度，如果给定的速度为 0，则跳到目标。

## Outputs

返回值。矢量。新的插值位置。

<hr>

Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19513617.png)

## Inputs

Current: Vector. Actual position.

Target: Vector. Target position.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..

## Outputs

Return Value: Vector. New interpolated position.
