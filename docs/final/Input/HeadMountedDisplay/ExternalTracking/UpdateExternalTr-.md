# UpdateExternalTr-

在校准后调用，尝试将内部追踪器（例如 HMD 追踪）与外部追踪器拉到一起。(例如，Mocap 追踪器）。这将设置内部跟踪器的基准偏移和旋转，以匹配并重新调整这两个系统。这可以在每次打勾时调用，或者在需要重新对齐时调用。请注意，如果两个系统相对于对方有分歧，这可能会导致不稳定的运动，或者如果在有重大漂移的情况下不经常调用，则会导致大跳动。

目标是头戴式显示器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19234332.png)

## Inputs

在。执行。

外部跟踪转化。Transform (by ref).外部追踪系统的参考标记在世界坐标中的变换。

## Outputs

出：执行。

<hr>

Called after calibration to attempt to pull the internal tracker (e.g. HMD tracking) in line with the external tracker. (e.g. mocap tracker). This will set the internal tracker's base offset and rotation to match and realign the two systems.. This can be called every tick, or whenever realignment is desired. Note that this may cause choppy movement if the two. systems diverge relative to each other, or a big jump if called infrequently when there has been significant drift

Target is Head Mounted Display Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19234332.png)

## Inputs

In: Exec.

External Tracking Transform: Transform (by ref). The transform in world-coordinates, of the reference marker of the external tracking system.

## Outputs

Out: Exec.
