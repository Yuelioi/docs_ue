# RemoveBoneTrack_Message

移除一个现有的骨骼动画轨道，并提供名称。如果成功的话，广播一个 EAnimDataModelNotifyType::TrackRemoved 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532962.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应该被删除的轨道的骨架名称。

Should Transact（应该交易）。Boolean（布尔）。是否应该生成任何撤销-重做的修改。

## Outputs

Out: 执行。

返回值。布尔值。移除是否成功。

<hr>

Removes an existing bone animation track with the provided name. Broadcasts a EAnimDataModelNotifyType::TrackRemoved notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532962.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name of the track which should be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the removal was successful.
