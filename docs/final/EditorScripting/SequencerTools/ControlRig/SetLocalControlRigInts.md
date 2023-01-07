# SetLocalControlRigInts

在特定时间设置 ControlRig 控件的 int 值

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18533150.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。活跃的序列来设置值。

控制装置。控制装置对象参考。The ControlRig.

控制名称。名称。控件的名称，应该是一个 int 控件。

帧。帧号结构的数组。设置数值的时间。

值。整数的数组。在这些时候设置。

时间单位。ESequenceTimeUnit 枚举。帧值的单位，可以是显示率，也可以是 tick 分辨率。

## Outputs

出：执行。

<hr>

Set ControlRig Control's int values at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18533150.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set value on.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a int control.

Frames: Array of Frame Number Structures. Times to set the values.

Values: Array of Integers. to set at those times.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

## Outputs

Out: Exec.
