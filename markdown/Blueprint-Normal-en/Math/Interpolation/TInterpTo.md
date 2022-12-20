# TInterpTo

Tries to reach Target transform based on distance from Current position, giving a nice smooth feeling when tracking a position.

Target is Kismet Math Library

## 图示

![]($-20221218-19513092.png)

## Inputs

Current: Transform (by ref). Actual transform.

Target: Transform (by ref). Target transform.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..  

## Outputs

Return Value: Transform. New interpolated transform.

