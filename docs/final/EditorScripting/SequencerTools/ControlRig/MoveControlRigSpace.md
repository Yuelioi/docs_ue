# MoveControlRigSpace

将指定时间的控制钻机空格键移动到新的时间。这也将移动这个空间开关边界的任何控制装置键。

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18530712.png)

## Inputs

在。执行。

在序列中。水平序列对象参考。序列来设置空间。

在控制钻机中。控制装置对象参考。ControlRig 与控制。

在控制名称。名称。控制的名称。

在时间上。帧数结构。空间键的原始时间。

在新的时间。帧数结构。空间键的新时间。

时间单位。ESequenceTimeUnit 枚举。时间参数的单位，可以是显示速率或刻度分辨率。

## Outputs

出：执行。

返回值。布尔值。如果函数失败，将返回 false，例如，如果此时没有钥匙，将失败，或者如果新的时间无效，也可能失败。

<hr>

Move the Control Rig Space Key for the Control at the specified time to the new time. This will also move any Control Rig keys at this space switch boundary.

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18530712.png)

## Inputs

In: Exec.

In Sequence: Level Sequence Object Reference. Sequence to set the space.

In Control Rig: Control Rig Object Reference. ControlRig with the Control.

In Control Name: Name. The name of the Control.

In Time: Frame Number Structure. Original time of the space key.

In New Time: Frame Number Structure. New time for the space key.

Time Unit: ESequenceTimeUnit Enum. Unit for the time params, either in display rate or tick resolution.

## Outputs

Out: Exec.

Return Value: Boolean. Will return false if function fails, for example if there is no key at this time it will fail, or if the new time is invalid it could fail also.
