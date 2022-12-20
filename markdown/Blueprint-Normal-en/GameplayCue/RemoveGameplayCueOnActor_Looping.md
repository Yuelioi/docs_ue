# RemoveGameplayCueOnActor_Looping

Invoke the removed event for a gameplay cue on the target actor. This should be paired with an AddGameplayCueOnActor call.

  * If the actor has an ability system, the event will fire on authority only and will be replicated.

  * If the actor does not have an ability system, the event will only be fired locally.





Target is Gameplay Cue Function Library

## 图示

![]($-20221218-19084246.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Gameplay Cue Tag: Gameplay Tag Structure.

Parameters: Gameplay Cue Parameters Structure (by ref).  

## Outputs

Out: Exec.

