# GetLocalControlRigFloats

获取ControlRig控件在特定时间的浮动值

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18524769.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。获取价值的活动序列。

控制装置。控制装置对象参考。The ControlRig.

控制名称。名称。控件的名称，应该是一个浮动的控件。

帧。帧数结构的数组。获取数值的时间。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

## Outputs

出：执行。

返回值。Float（单精度）的数组。返回这些时间的值。