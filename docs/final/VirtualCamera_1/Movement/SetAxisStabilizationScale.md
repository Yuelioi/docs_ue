# SetAxisStabilizationScale

设置一个给定的锁的稳定率。

目标是虚拟摄像机播放器控制器底座

## 图示

![](/uploads/projects/ue-bluprint/20221218-21285876.png)

## Inputs

在。执行。

目标。虚拟摄像机播放器控制器基础对象参考。

要调整的轴。EVirtualCameraAxis 枚举。应改变其稳定率的轴。

新的稳定金额。Float（单精度）。我们应该尝试设置的稳定金额。

## Outputs

出：执行。

返回值。Float (single-precision). 稳定量在夹紧后被设置为实际值。

<hr>

Sets the stabilization rate for a given lock.

Target is Virtual Camera Player Controller Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-21285876.png)

## Inputs

In: Exec.

Target: Virtual Camera Player Controller Base Object Reference.

Axis to Adjust: EVirtualCameraAxis Enum. The axis whose stabilization rate should be changed.

New Stabilization Amount: Float (single-precision). The stabilization amount we should attempt to set the value.

## Outputs

Out: Exec.

Return Value: Float (single-precision). the actual value the stabilization amount was set to after clamping.
