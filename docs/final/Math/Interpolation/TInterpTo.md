# TInterpTo

试图根据与当前位置的距离达到目标变换，在追踪位置时给人一种很好的平稳感觉。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19513092.png)

## Inputs

当前：转化（通过参考）。实际转化。

目标。转化（通过参考）。目标转化。

三角洲时间。浮点数（单精度）。自最后一次打钩以来的时间。

互调速度。浮点数（单精度）。插值速度，如果给定的速度为 0，则跳到目标。

## Outputs

返回值。变换。新的插值变换。

<hr>

Tries to reach Target transform based on distance from Current position, giving a nice smooth feeling when tracking a position.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19513092.png)

## Inputs

Current: Transform (by ref). Actual transform.

Target: Transform (by ref). Target transform.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..

## Outputs

Return Value: Transform. New interpolated transform.
