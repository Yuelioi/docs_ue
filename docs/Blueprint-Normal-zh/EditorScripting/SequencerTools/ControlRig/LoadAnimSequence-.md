# LoadAnimSequence-

将动画序列加载到这个控制装置部分

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530579.png)

## Inputs

在。执行。

电影场景部分。电影场景部分的对象参考。要载入的电影场景部分。

Anim Sequence:Anim Sequence Object Reference.要加载的序列。

Skel Mesh Comp:Skeletal Mesh Component对象参考。

在起始帧。帧号结构。插入动画的帧。

时间单位。ESequenceTimeUnit枚举。所有帧和时间值的单位，可以是显示速率或刻度分辨率。

关键减少。布尔值。如果为真，则根据公差进行减键，如果为假，则不减键。

误差。浮点数（单精度）。如果减少键，关于哪些键将被删除的公差，较小的公差，通常有更多的键。

## Outputs

出：执行。

返回值。布尔值。如果成功，返回True，否则返回False。