# WaitGameplayTagAddtoActor

等待，直到指定的游戏标记被添加到目标角色的能力组件中。如果这个任务启动时标签已经存在，它将立即广播添加事件。只要OnlyTriggerOnce = false，它就会一直监听。

目标是能力异步等待游戏标签添加

## 图示

![]($-20221218-17334986.png)

## Inputs

在。Exec.

目标演员。Actor Object Reference。

标签。Gameplay Tag结构。

Only Trigger Once：布尔值。 

## Outputs

输出。执行：执行。

Async Action: Ability Async Wait Gameplay Tag添加了对象参考。

已添加: Exec. 已添加
