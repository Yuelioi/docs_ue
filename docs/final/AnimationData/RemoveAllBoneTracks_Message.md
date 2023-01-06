# RemoveAllBoneTracks_Message

移除所有现有的骨骼动画轨道。为每个被移除的轨道广播一个 EAnimDataModelNotifyType::TrackRemoved，包裹在 BracketOpened/BracketClosed 的通知中。

目标是动画数据控制器

## 图示

![]($-20221218-17532739.png)

## Inputs

在。执行。

目标。对象参考。

应该交易。布尔型。是否应该产生任何撤销-重做的改变。 

## Outputs

输出。执行：执行。

Removes all existing Bone Animation tracks. Broadcasts a EAnimDataModelNotifyType::TrackRemoved for each removed track, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-17532739.png)

## Inputs

In: Exec.

Target: Object Reference.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

