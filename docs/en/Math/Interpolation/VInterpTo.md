# VInterpTo

Tries to reach Target based on distance from Current position, giving a nice smooth feeling when tracking a position.

Target is Kismet Math Library

## 图示

![]($-20221218-19513617.png)

## Inputs

Current: Vector. Actual position.

Target: Vector. Target position.

Delta Time: Float (single-precision). Time since last tick.

Interp Speed: Float (single-precision). Interpolation speed, if the speed given is 0, then jump to the target..  

## Outputs

Return Value: Vector. New interpolated position.

