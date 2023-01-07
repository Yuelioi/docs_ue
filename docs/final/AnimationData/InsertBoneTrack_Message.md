# InsertBoneTrack_Message

在提供的索引处为提供的名称插入一个新的骨骼动画轨道。如果成功的话，将广播一个 EAnimDataModelNotifyType::TrackAdded 通知。骨头的名字会被 AnimModel 的外部目标 USkeleton 验证，以确保骨头存在。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532293.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应插入轨道的骨骼名称。

希望的索引。Integer（整数）。应插入轨道的索引。

Should Transact: Boolean（布尔）。是否应该生成任何撤销-重做的更改。

## Outputs

Out: 执行：执行。

返回值。整数。插入骨骼轨迹的索引，如果插入失败，则为 INDEX_NONE。

<hr>

Inserts a new bone animation track for the provided name, at the provided index. Broadcasts a EAnimDataModelNotifyType::TrackAdded notify if successful.. The bone name is verified with the AnimModel's outer target USkeleton to ensure the bone exists.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532293.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name for which a track should be inserted.

Desired Index: Integer. Index at which the track should be inserted.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Integer. The index at which the bone track was inserted, INDEX_NONE if the insertion failed.
