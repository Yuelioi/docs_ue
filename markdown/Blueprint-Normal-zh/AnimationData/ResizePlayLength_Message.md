# ResizePlayLength_Message

设置可播放的总长度（秒）。如果成功，广播一个AnimDataModelNotifyType::SequenceLengthChanged通知。T0和T1被期望代表被添加或删除的时间窗口。例如，对于插入，T0表示附加时间开始的时间，T1表示它结束的时间。对于移除，T0表示应该开始移除的时间，而T1表示结束。给出了T1-T0增加或删除的总长度。根据UAnimDataModel::FrameRate的当前值，重新计算所提供长度的帧和键的数量。

目标是动画数据控制器

## 图示

![]($-20221218-17533313.png)

## Inputs

在。执行。

目标。对象参考。

新的长度。Float (single-precision).

T0: Float (single-precision). 在0和Length之间的点，在这个点上开始改变时间。

T1: Float (single-precision). 介于0和Length之间的点，时间变化在此结束。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
