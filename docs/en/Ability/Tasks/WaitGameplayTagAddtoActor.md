# WaitGameplayTagAddtoActor

Wait until the specified gameplay tag is Added to Target Actor's ability component. If the tag is already present when this task is started, it will immediately broadcast the Added event. It will keep listening as long as OnlyTriggerOnce = false.

Target is Ability Async Wait Gameplay Tag Added

## 图示

![]($-20221218-17334986.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Tag: Gameplay Tag Structure.

Only Trigger Once: Boolean.  

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Tag Added Object Reference.

Added: Exec. Added.

