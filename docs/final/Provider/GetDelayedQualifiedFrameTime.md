# GetDelayedQualifiedFrameTime

通过应用 FrameDelay 返回当前帧时间。只有在 GetSynchronizationState()返回 Synchronized 时，才假定有效。

目标是时间码提供者

## 图示

![](/uploads/projects/ue-bluprint/20221218-20305892.png)

## Inputs

目标。时间码提供者对象参考。

## Outputs

返回值。合格的帧时间结构。返回当前的帧时间，并应用 FrameDelay...只有在 GetSynchronizationState()返回 Synchronized 时才有效。

<hr>

Return current frame time with FrameDelay applied.. Only assume valid when GetSynchronizationState() returns Synchronized.

Target is Timecode Provider

## 图示

![](/uploads/projects/ue-bluprint/20221218-20305892.png)

## Inputs

Target: Timecode Provider Object Reference.

## Outputs

Return Value: Qualified Frame Time Structure. Return current frame time with FrameDelay applied.. Only assume valid when GetSynchronizationState() returns Synchronized..
