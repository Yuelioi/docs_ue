# DeleteControlRigSpace

在指定的时间删除控制钻机的空间键。这将在此时删除任何附加的控制装置键，并将对新空间进行任何需要的补偿。

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522072.png)

## Inputs

在。执行。

在序列中。水平序列对象参考。序列来设置空间。

在控制钻机中。控制装置对象参考。ControlRig与控制。

在控制名称。名称。控制的名称。

在时间上。帧数结构。时间删除空间...

时间单位。ESequenceTimeUnit枚举。InTime的单位，可以是显示速率或刻度分辨率。

## Outputs

出：执行。

返回值。布尔值。如果函数失败，将返回false，例如，如果此时没有钥匙，它将失败。