# WaitGameplayEventtoActor

Wait until the specified gameplay tag event is triggered on a target ability system component. It will keep listening as long as OnlyTriggerOnce = false. If OnlyMatchExact = false it will trigger for nested tags

Target is Ability Async Wait Gameplay Event

## 图示

![]($-20221218-17300885.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Event Tag: Gameplay Tag Structure.

Only Trigger Once: Boolean.

Only Match Exact: Boolean.  

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Event Object Reference.

Event Received: Exec. Event Received.

Payload: Gameplay Event Data Structure.

