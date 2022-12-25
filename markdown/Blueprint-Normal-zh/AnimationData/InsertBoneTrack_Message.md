# InsertBoneTrack_Message

在提供的索引处为提供的名称插入一个新的骨骼动画轨道。如果成功的话，将广播一个 EAnimDataModelNotifyType::TrackAdded 通知。骨头的名字会被AnimModel的外部目标USkeleton验证，以确保骨头存在。

目标是动画数据控制器

## 图示

![]($-20221218-17532293.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应插入轨道的骨骼名称。

希望的索引。Integer（整数）。应插入轨道的索引。

Should Transact: Boolean（布尔）。是否应该生成任何撤销-重做的更改。 

## Outputs

Out: 执行：执行。

返回值。整数。插入骨骼轨迹的索引，如果插入失败，则为INDEX_NONE。
