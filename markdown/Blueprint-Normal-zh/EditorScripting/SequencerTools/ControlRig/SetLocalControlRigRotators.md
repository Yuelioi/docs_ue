# SetLocalControlRigRotators

在特定时间设置ControlRig Control的旋转器数值

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18533547.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。活跃的序列来设置值。

控制装置。控制装置对象参考。The ControlRig.

控制名称。名称。控件的名称，应该是一个旋转器控件。

帧。帧数结构的数组。设置数值的时间。

值。旋转器的数组。在这些时候设置。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

## Outputs

出：执行。