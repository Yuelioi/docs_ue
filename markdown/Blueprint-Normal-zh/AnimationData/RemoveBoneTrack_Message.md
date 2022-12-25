# RemoveBoneTrack_Message

移除一个现有的骨骼动画轨道，并提供名称。如果成功的话，广播一个 EAnimDataModelNotifyType::TrackRemoved 通知。

目标是动画数据控制器

## 图示

![]($-20221218-17532962.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应该被删除的轨道的骨架名称。

Should Transact（应该交易）。Boolean（布尔）。是否应该生成任何撤销-重做的修改。 

## Outputs

Out: 执行。

返回值。布尔值。移除是否成功。
