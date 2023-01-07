# Resize

设置可播放的总长度（秒）并调整曲线的大小。广播 EAnimDataModelNotifyType::SequenceLengthChanged.和 EAnimDataModelNotifyType::CurveChanged 通知如果成功。T0 和 T1 预计代表被添加或删除的时间窗口。例如，对于插入，T0 表示时间，附加时间开始，T1 表示时间结束。对于移除，T0 表示应该开始移除的时间，而 T1 表示结束。给出了 T1-T0 增加或删除的总长度。根据 UAnimDataModel::FrameRate 的当前值，重新计算所提供长度的帧和键的数量。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-17533073.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

长度。Float（单精度）。新的可播放的总长度值，必须是正数且不为零。

T0：浮点数（单精度）。介于 0 和 Length 之间的点，时间的变化从这里开始。

T1: Float (single-precision). 介于 0 和 Length 之间的点，时间变化在此结束。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

<hr>

Sets the total play-able length in seconds and resizes curves. Broadcasts EAnimDataModelNotifyType::SequenceLengthChanged. and EAnimDataModelNotifyType::CurveChanged notifies if successful.. T0 and T1 are expected to represent the window of time that was either added or removed. E.g. for insertion T0 indicates the time. at which additional time starts and T1 were it ends. For removal T0 indicates the time at which time should be started to remove, and T1 indicates the end. Giving a total of T1 - T0 added or removed length.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-17533073.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Length: Float (single-precision). Total new play-able length value, has to be positive and non-zero.

T0: Float (single-precision). Point between 0 and Length at which the change in time starts.

T1: Float (single-precision). Point between 0 and Length at which the change in time ends.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.
