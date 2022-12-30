# SetPlayLength

设置可播放的总长度（秒）。如果成功，广播一个AnimDataModelNotifyType::SequenceLengthChanged通知。根据UAnimDataModel::FrameRate的当前值，重新计算所提供长度的帧数和键数。

目标是动画数据控制器

## 图示

![]($-20221218-17534219.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

长度。Float（单精度）。新的可播放的长度值，必须是正数且不为零。

Should Transact。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行。
