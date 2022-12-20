# WaitGameplayTagRemovefromActor

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

