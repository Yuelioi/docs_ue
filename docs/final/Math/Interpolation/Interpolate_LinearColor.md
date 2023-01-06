# Interpolate_LinearColor

从当前到目标的线性颜色插值。以到目标的距离为尺度，所以它有很强的启动速度和缓和性。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19511795.png)

## Inputs

电流。线性色彩结构。目前的颜色。

目标。线性色彩结构。目标颜色。

三角洲时间。浮点数（单精度）。自最后一次打钩以来的时间。

互调速度。浮点数（单精度）。插值速度，如果给定的速度为0，则跳到目标。  

## Outputs

返回值。线性颜色结构。新的插值颜色。

Interpolate Linear Color from Current to Target. Scaled by distance to Target, so it has a strong start speed and ease out.

Target is Kismet Math Library

## 图示

![]($-20221218-19511795.png)

## Inputs

Current: Linear Color Structure. Current Color.

Target: Linear Color Structure. Target Color.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..  

## Outputs

Return Value: Linear Color Structure. New interpolated Color.

