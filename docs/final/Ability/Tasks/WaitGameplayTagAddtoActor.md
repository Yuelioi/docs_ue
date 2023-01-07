# WaitGameplayTagAddtoActor

等待，直到指定的游戏标记被添加到目标角色的能力组件中。如果这个任务启动时标签已经存在，它将立即广播添加事件。只要 OnlyTriggerOnce = false，它就会一直监听。

目标是能力异步等待游戏标签添加

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334986.png)

## Inputs

在。Exec.

目标演员。Actor Object Reference。

标签。Gameplay Tag 结构。

Only Trigger Once：布尔值。

## Outputs

输出。执行：执行。

Async Action: Ability Async Wait Gameplay Tag 添加了对象参考。

已添加: Exec. 已添加

<hr>

Wait until the specified gameplay tag is Added to Target Actor's ability component. If the tag is already present when this task is started, it will immediately broadcast the Added event. It will keep listening as long as OnlyTriggerOnce = false.

Target is Ability Async Wait Gameplay Tag Added

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334986.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Tag: Gameplay Tag Structure.

Only Trigger Once: Boolean.

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Tag Added Object Reference.

Added: Exec. Added.
