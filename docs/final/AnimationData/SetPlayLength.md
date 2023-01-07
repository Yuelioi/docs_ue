# SetPlayLength

设置可播放的总长度（秒）。如果成功，广播一个 AnimDataModelNotifyType::SequenceLengthChanged 通知。根据 UAnimDataModel::FrameRate 的当前值，重新计算所提供长度的帧数和键数。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-17534219.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

长度。Float（单精度）。新的可播放的长度值，必须是正数且不为零。

Should Transact。布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行。

<hr>

Sets the total play-able length in seconds. Broadcasts a EAnimDataModelNotifyType::SequenceLengthChanged notify if successful.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-17534219.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Length: Float (single-precision). New play-able length value, has to be positive and non-zero.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.
