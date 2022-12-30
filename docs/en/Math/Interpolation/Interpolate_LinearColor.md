# Interpolate_LinearColor

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

