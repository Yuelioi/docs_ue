# WaitGameplayTagAdd

Wait until the specified gameplay tag is Added. By default this will look at the owner of this ability. OptionalExternalTarget can be set to make this look at another actor's tags for changes.. If the tag is already present when this task is started, it will immediately broadcast the Added event. It will keep listening as long as OnlyTriggerOnce = false.

Target is Ability Task Wait Gameplay Tag Added

## 图示

![]($-20221218-17334847.png)

## Inputs

In: Exec.

Tag: Gameplay Tag Structure.

In Optional External Target: Actor Object Reference.

Only Trigger Once: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Tag Added Object Reference.

Added: Exec. Added.
