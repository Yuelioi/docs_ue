# WaitGameplayEvent

Wait until the specified gameplay tag event is triggered. By default this will look at the owner of this ability. OptionalExternalTarget can be set to make this look at another actor's tags for changes. It will keep listening as long as OnlyTriggerOnce = false. If OnlyMatchExact = false it will trigger for nested tags

Target is Ability Task Wait Gameplay Event

## 图示

![]($-20221218-17334726.png)

## Inputs

In: Exec.

Event Tag: Gameplay Tag Structure.

Optional External Target: Actor Object Reference.

Only Trigger Once: Boolean.

Only Match Exact: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Event Object Reference.

Event Received: Exec. Event Received.

Payload: Gameplay Event Data Structure.

