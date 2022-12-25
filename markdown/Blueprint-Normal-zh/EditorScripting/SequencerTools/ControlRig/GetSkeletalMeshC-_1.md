# GetSkeletalMeshC-_1

在特定的时间获取骨骼网构件的世界变换

目标是Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530167.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。获取转换的活动序列。

骨架网状结构组件。Skeletal Mesh Component对象参考。SkeletalMeshComponent。

帧。帧数结构的数组。获得变换的次数。

时间单位。ESequenceTimeUnit枚举。帧值的单位，可以是显示率，也可以是tick分辨率。

参考名称。名称。参照者的可选名称。

## Outputs

出：执行。

返回值。变换的数组。返回世界变换。