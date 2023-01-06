# SetPlayLength_Message

设置可播放的总长度（秒）。如果成功，广播一个AnimDataModelNotifyType::SequenceLengthChanged通知。根据UAnimDataModel::FrameRate的当前值，重新计算所提供长度的帧数和键数。

目标是动画数据控制器

## 图示

![]($-20221218-17534335.png)

## Inputs

在。执行。

目标。对象参考。

长度。浮点数（单精度）。新的可播放的长度值，必须是正数且不为零。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

Sets the total play-able length in seconds. Broadcasts a EAnimDataModelNotifyType::SequenceLengthChanged notify if successful.. The number of frames and keys for the provided length is recalculated according to the current value of UAnimDataModel::FrameRate.

Target is Animation Data Controller

## 图示

![]($-20221218-17534335.png)

## Inputs

In: Exec.

Target: Object Reference.

Length: Float (single-precision). New play-able length value, has to be positive and non-zero.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

