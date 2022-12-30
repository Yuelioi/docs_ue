# GetDelayedQualifiedFrameTime

通过应用FrameDelay返回当前帧时间。只有在GetSynchronizationState()返回Synchronized时，才假定有效。

目标是时间码提供者

## 图示

![]($-20221218-20305892.png)

## Inputs

目标。时间码提供者对象参考。  

## Outputs

返回值。合格的帧时间结构。返回当前的帧时间，并应用FrameDelay...只有在GetSynchronizationState()返回Synchronized时才有效。
