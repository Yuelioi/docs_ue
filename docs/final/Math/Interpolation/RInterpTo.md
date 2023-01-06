# RInterpTo

试图在当前旋转的基础上达到目标旋转，在旋转到目标旋转时给人一种很好的平稳感觉。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19512430.png)

## Inputs

目前。旋转器。实际旋转。

目标：旋转器。目标轮换。

三角洲时间。浮点数（单精度）。自最后一次打钩以来的时间。

互调速度。浮点数（单精度）。插值速度，如果给定的速度为0，则跳到目标。  

## Outputs

返回值。旋转器。新的插值位置。

Tries to reach Target rotation based on Current rotation, giving a nice smooth feeling when rotating to Target rotation.

Target is Kismet Math Library

## 图示

![]($-20221218-19512430.png)

## Inputs

Current: Rotator. Actual rotation.

Target: Rotator. Target rotation.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..  

## Outputs

Return Value: Rotator. New interpolated position.

