# GetLocalControlRigVector2D

获取ControlRig控件在一个特定时间的Vector2D值

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18525898.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。获取价值的活动序列。

控制装置。控制装置对象参考。The ControlRig.

控制名称。名称。控件的名称，应该是一个Vector2D控件。

框架。帧号结构。获取数值的时间。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

## Outputs

出：执行。

返回值。矢量2D结构。返回当时的值。