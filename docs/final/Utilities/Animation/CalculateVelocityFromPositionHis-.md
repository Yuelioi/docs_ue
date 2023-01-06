# CalculateVelocityFromPositionHis-

这个函数计算出一个位置随时间变化的速度。你需要将一个有效的PositionHistory变量挂在这里进行存储。

目标是Kismet动画库

## 图示

![]($-20221218-12164221.png)

## Inputs

在。执行。

Delta Seconds:Float（单精度）。经过的时间，以秒为单位。

位置。矢量。随着时间的推移，要追踪的位置。

历史。位置历史结构（按参考）。用来存储的历史...

采样数。整数。用于历史记录的样本数。样本数越多，速度变化越平滑。

速度最小。浮点数（单精度）。用于归一化的最小速度（如果min和max都设置为0，则归一化被关闭）。

速度最大值：浮点数（单精度）。用于归一化的最大速度（如果min和max都设置为0，则归一化被关闭）。  

## Outputs

出：执行。

返回值。浮点数（单精度）。

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

