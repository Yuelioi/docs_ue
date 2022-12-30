# WaitGameplayEffectAppliedtoTarge-_1

Wait until the owner (or External Owner) applies a GameplayEffect to a Target (the target may be the owner too!). If TriggerOnce is true, this task will only return one time. Otherwise it will return everytime a GE is applied that meets the requirements over the life of the ability. Optional External Owner can be used to run this task on someone else (not the owner of the ability). By default you can leave this empty.

Target is Ability Task Wait Gameplay Effect Applied Target

## 图示

![]($-20221218-17334475.png)

## Inputs

In: Exec.

Source Filter: Gameplay Target Data Filter Handle Structure.

Source Tag Query: Gameplay Tag Query Structure.

Target Tag Query: Gameplay Tag Query Structure.

Trigger Once: Boolean.

Optional External Owner: Actor Object Reference.

Listen for Periodic Effect: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Effect Applied Target Object Reference.

On Applied: Exec. On Applied.

Target: Actor Object Reference.

Spec Handle: Gameplay Effect Spec Handle Structure.

Active Handle: Active Gameplay Effect Handle Structure.

