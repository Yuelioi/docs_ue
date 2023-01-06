# SetBoneTrackKeys_Message

移除一个已有的骨骼动画轨道，并提供名称。如果成功的话，会广播一个AnimDataModelNotifyType::TrackChanged通知。所提供的键的数量预计将与每个组件相匹配，并且不为零。

目标是动画数据控制器

## 图示

![]($-20221218-17533655.png)

## Inputs

在。执行。

目标。对象参考。

骨骼名称。名称。应设置键值的轨道的骨骼名称。

Positional Keys（位置键）。Array of Vectors（矢量阵列）。平移组件的按键数组。

旋转键。Quat结构的数组。旋转部分的键的数组。

缩放键。矢量的数组。缩放组件的键的数组。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。键值是否被成功设置。

Removes an existing bone animation track with the provided name. Broadcasts a EAnimDataModelNotifyType::TrackChanged notify if successful.. The provided number of keys provided is expected to match for each component, and be non-zero.

Target is Animation Data Controller

## 图示

![]($-20221218-17533655.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name. Bone name of the track for which the keys should be set.

Positional Keys: Array of Vectors. Array of keys for the translation component.

Rotational Keys: Array of Quat Structures. Array of keys for the rotation component.

Scaling Keys: Array of Vectors. Array of keys for the scale component.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the keys were successfully set.

