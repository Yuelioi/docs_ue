# CommitAbilityCooldown

只尝试提交该能力的冷却时间。如果BroadcastCommitEvent为真，它将广播WaitAbilityCommit等任务所监听的提交事件。

目标是游戏中的能力

## 图示

![]($-20221218-17302612.png)

## Inputs

在。执行。

目标。Gameplay Ability对象参考。

广播承诺事件。布尔值。

强制冷却时间。布尔值。 

## Outputs

输出。执行。

返回值。布尔值。只尝试提交能力的冷却时间。如果BroadcastCommitEvent为真，它将广播WaitAbilityCommit等任务正在监听的提交事件。

Attempts to commit the ability's cooldown only. If BroadcastCommitEvent is true, it will broadcast the commit event that tasks like WaitAbilityCommit are listening for.

Target is Gameplay Ability

## 图示

![]($-20221218-17302612.png)

## Inputs

In: Exec.

Target: Gameplay Ability Object Reference.

Broadcast Commit Event: Boolean.

Force Cooldown: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to commit the ability's cooldown only. If BroadcastCommitEvent is true, it will broadcast the commit event that tasks like WaitAbilityCommit are listening for..

