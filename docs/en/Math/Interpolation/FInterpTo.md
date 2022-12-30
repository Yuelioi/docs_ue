# FInterpTo

Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.

Target is Kismet Math Library

## 图示

![]($-20221218-19511402.png)

## Inputs

Current: Float (double-precision). Actual position.

Target: Float (double-precision). Target position.

Delta Time: Float (double-precision). Time since last tick.

Interp Speed: Float (double-precision). Interpolation speed, if the speed given is 0, then jump to the target..  

## Outputs

Return Value: Float (double-precision). New interpolated position.

