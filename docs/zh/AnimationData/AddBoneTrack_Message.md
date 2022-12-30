# AddBoneTrack_Message

为提供的名称添加一个新的骨骼动画轨道。如果成功的话，广播一个 EAnimDataModelNotifyType::TrackAdded 通知。

目标是动画数据控制器

## 图示

![]($-20221218-17531608.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应该为其添加轨道的骨干名称。

Should Transact（应该交易）。Boolean（布尔）。是否应该生成任何撤销-重做的更改。 

## Outputs

输出。执行：执行。

返回值。整数。添加骨骼轨迹的索引，如果添加失败，则为INDEX_NONE。
