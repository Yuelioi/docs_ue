# WaitGameplayTagRemovefromActor

等待，直到指定的游戏标签从目标角色的能力组件中移除。如果这个任务启动时标签不存在，它将立即广播Removed事件。只要OnlyTriggerOnce = false，它就会一直监听。

目标是能力异步等待游戏标签被移除

## 图示

![]($-20221218-17335233.png)

## Inputs

在。执行。

目标演员。Actor Object Reference。

标签。Gameplay Tag结构。

Only Trigger Once：布尔值。 

## Outputs

输出。执行：执行。

Async Action: Ability Async Wait Gameplay Tag Removed Object Reference.

已删除。删除：执行。已删除。

Wait until the specified gameplay tag is Removed from Target Actor's ability component. If the tag is not present when this task is started, it will immediately broadcast the Removed event. It will keep listening as long as OnlyTriggerOnce = false.

Target is Ability Async Wait Gameplay Tag Removed

## 图示

![]($-20221218-17335233.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Tag: Gameplay Tag Structure.

Only Trigger Once: Boolean.  

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Tag Removed Object Reference.

Removed: Exec. Removed.

