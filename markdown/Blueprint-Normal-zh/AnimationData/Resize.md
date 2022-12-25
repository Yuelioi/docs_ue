# Resize

设置可播放的总长度（秒）并调整曲线的大小。广播EAnimDataModelNotifyType::SequenceLengthChanged.和EAnimDataModelNotifyType::CurveChanged通知如果成功。T0和T1预计代表被添加或删除的时间窗口。例如，对于插入，T0表示时间，附加时间开始，T1表示时间结束。对于移除，T0表示应该开始移除的时间，而T1表示结束。给出了T1-T0增加或删除的总长度。根据UAnimDataModel::FrameRate的当前值，重新计算所提供长度的帧和键的数量。

目标是动画数据控制器

## 图示

![]($-20221218-17533073.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

长度。Float（单精度）。新的可播放的总长度值，必须是正数且不为零。

T0：浮点数（单精度）。介于0和Length之间的点，时间的变化从这里开始。

T1: Float (single-precision). 介于0和Length之间的点，时间变化在此结束。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
