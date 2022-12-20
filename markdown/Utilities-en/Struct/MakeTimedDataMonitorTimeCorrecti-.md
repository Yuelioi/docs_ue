# MakeTimedDataMonitorTimeCorrecti-

Adds a node that create a 'TimedDataMonitorTimeCorrectionParameters' from its members

## 图示

![]($-20221218-15032542.png)

## Inputs

Buffer Resize Allowed: Boolean. Buffer Resize Allowed:. If no calibration is possible, are we allowed to increase the size of the buffer..

Buffer Shrink Allowed: Boolean. Buffer Shrink Allowed:. When resizing buffer, do we allow shrinking them..

Failed If Buffer Cant Be Resize: Boolean. Failed if Buffer Cant be Resize:. When resizing buffer, failed the calibration if a buffer couldn't be resize..

Use Standard Deviation: Boolean. Use Standard Deviation:. When calibrating, ensure that the evaluation is included inside the STD..

Number Of Standard Deviation: Integer. Number Of Standard Deviation:. When using STD, how many should we use..  

## Outputs

Timed Data Monitor Time Correction Parameters: Timed Data Monitor Time Correction Parameters Structure.

