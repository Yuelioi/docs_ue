# CalculateVelocityFromPositionHis-

This function calculates the velocity of a position changing over time.. You need to hook up a valid PositionHistory variable to this for storage.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164221.png)

## Inputs

In: Exec.

Delta Seconds: Float (single-precision). The time passed in seconds.

Position: Vector. The position to track over time..

History: Position History Structure (by ref). The history to use for storage..

Number Of Samples: Integer. The number of samples to use for the history. The higher the number of samples - the smoother the velocity changes..

Velocity Min: Float (single-precision). The minimum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).

Velocity Max: Float (single-precision). The maximum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).  

## Outputs

Out: Exec.

Return Value: Float (single-precision).

