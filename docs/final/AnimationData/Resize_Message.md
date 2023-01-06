# Resize_Message

设置可播放的总长度（秒）并调整曲线的大小。广播EAnimDataModelNotifyType::SequenceLengthChanged.和EAnimDataModelNotifyType::CurveChanged通知如果成功。T0和T1预计代表被添加或删除的时间窗口。例如，对于插入，T0表示时间，附加时间开始，T1表示时间结束。对于移除，T0表示应该开始移除的时间，而T1表示结束。给出一个T1-T0的增加或删除的总长度。根据UAnimDataModel::FrameRate的当前值，重新计算所提供长度的帧和键的数量。

目标是动画数据控制器

## 图示

![]($-20221218-17533425.png)

## Inputs

在。执行。

目标。对象参考。

长度。浮点数（单精度）。新的可播放的总长度值，必须是正数且不为零。

T0：浮点数（单精度）。在0和Length之间的点，在这个点上开始改变时间。

T1: Float (single-precision). 介于0和Length之间的点，时间变化在此结束。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

Sets the total play-able length in seconds and resizes curves. Broadcasts EAnimDataModelNotifyType::SequenceLengthChanged. and EAnimDataModelNotifyType::CurveChanged notifies if successful.. T0 and T1 are expected to represent the window of time that was either added or removed. E.g. for insertion T0 indicates the time. at which additional time starts and T1 were it ends. For removal T0 indicates the time at which time should be started to remove, and T1 indicates the end. Giving a total of T1 - T0 added or removed length.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![]($-20221218-17533425.png)

## Inputs

In: Exec.

Target: Object Reference.

Length: Float (single-precision). Total new play-able length value, has to be positive and non-zero.

T0: Float (single-precision). Point between 0 and Length at which the change in time starts.

T1: Float (single-precision). Point between 0 and Length at which the change in time ends.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

