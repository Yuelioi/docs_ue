# GetLocalControlR-

获取 ControlRig 控件在某一特定时间的欧拉变换值

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18523278.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。获取价值的活动序列。

控制装置。控制装置对象参考。The ControlRig.

控制名称。名称。控件的名称，应该是一个 EulerTransfom 控件。

框架。帧号结构。获取数值的时间。

时间单位。ESequenceTimeUnit 枚举。帧值的单位，可以是显示率，也可以是 tick 分辨率。

## Outputs

出：执行。

返回值。欧拉变换结构。返回当时的值。

<hr>

Get ControlRig Control's EulerTransform value at a specific time

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18523278.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get value for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a EulerTransfom control.

Frame: Frame Number Structure. Time to get the value.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

## Outputs

Out: Exec.

Return Value: Euler Transform Structure. Returns Value at that time.
