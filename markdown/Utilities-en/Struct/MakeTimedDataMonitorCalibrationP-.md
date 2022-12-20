# MakeTimedDataMonitorCalibrationP-

Adds a node that create a 'TimedDataMonitorCalibrationParameters' from its members

## 图示

![]($-20221218-15032169.png)

## Inputs

Number Of Retries: Integer. Number Of Retries:. When needed, how many retry is allowed..

Buffer Resize Allowed: Boolean. Buffer Resize Allowed:. If no calibration is possible, are we allowed to increase the size of the buffer..

Buffer Shrink Allowed: Boolean. Buffer Shrink Allowed:. When resizing buffer, do we allow shrinking them..

Failed If Buffer Cant Be Resize: Boolean. Failed if Buffer Cant be Resize:. When resizing buffer, failed the calibration if a buffer couldn't be resize..

Use Standard Deviation: Boolean. Use Standard Deviation:. When calibrating, ensure that the evaluation is included inside the STD..

Number Of Standard Deviation: Integer. Number Of Standard Deviation:. When using STD, how many should we use..

Reset Statistics Before Using Standard Deviation: Boolean. Reset Statistics Before Using Standard Deviation:. Before calibration, allow to reset the statistics..

Amount Of Seconds To Wait After Statistic Reset: Float (single-precision). Amount Of Seconds to Wait After Statistic Reset:. Before calibration, allow to reset the statistics..  

## Outputs

Timed Data Monitor Calibration Parameters: Timed Data Monitor Calibration Parameters Structure.

