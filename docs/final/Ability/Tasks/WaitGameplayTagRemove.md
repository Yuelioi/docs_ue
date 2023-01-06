# WaitGameplayTagRemove

等到指定的游戏标签被移除。默认情况下，它会查看这个能力的所有者。可以设置OptionalExternalTarget，使其查看另一个行为者的标签是否有变化。如果这个任务启动时标签不存在，它将立即广播Removed事件。只要OnlyTriggerOnce = false，它就会一直收听。

目标是能力任务等待游戏标签被移除

## 图示

![]($-20221218-17335107.png)

## Inputs

在。执行。

标签。Gameplay Tag结构。

在可选的外部目标中。演员对象参考。

Only Trigger Once：布尔值。 

## Outputs

输出。执行：执行。

异步任务。Ability Task Wait Gameplay Tag Removeed Object Reference.

已删除。Exec. 已删除。

Wait until the specified gameplay tag is Removed. By default this will look at the owner of this ability. OptionalExternalTarget can be set to make this look at another actor's tags for changes.. If the tag is not present when this task is started, it will immediately broadcast the Removed event. It will keep listening as long as OnlyTriggerOnce = false.

Target is Ability Task Wait Gameplay Tag Removed

## 图示

![]($-20221218-17335107.png)

## Inputs

In: Exec.

Tag: Gameplay Tag Structure.

In Optional External Target: Actor Object Reference.

Only Trigger Once: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Tag Removed Object Reference.

Removed: Exec. Removed.

