# SetFrameRate

设置骨骼动画的采样帧率。如果成功的话，广播一个 EAnimDataModelNotifyType::FrameRateChanged 通知。根据UAnimDataModel::PlayLength的当前值，重新计算所提供的帧率的帧和键的数量。

目标是动画数据控制器

## 图示

![]($-20221218-17533767.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

帧率。帧率结构。新的采样帧率，必须是正数且非零。

Should Transact。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
