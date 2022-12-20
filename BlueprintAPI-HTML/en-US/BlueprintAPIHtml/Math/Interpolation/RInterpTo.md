# RInterpTo

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

