# CommitAbilityCooldown

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

