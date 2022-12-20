# WaitGameplayEffectAppliedtoActor

Wait until a GameplayEffect is applied to a target actor. If TriggerOnce is true, this action will only activate one time. Otherwise it will return every time a GE is applied that meets the requirements over the life of the ability

Target is Ability Async Wait Gameplay Effect Applied

## 图示

![]($-20221218-17300744.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Source Filter: Gameplay Target Data Filter Handle Structure.

Source Tag Requirements: Gameplay Tag Requirements Structure.

Target Tag Requirements: Gameplay Tag Requirements Structure.

Trigger Once: Boolean.

Listen for Periodic Effect: Boolean.  

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Effect Applied Object Reference.

On Applied: Exec. On Applied.

Source: Actor Object Reference.

Spec Handle: Gameplay Effect Spec Handle Structure.

Active Handle: Active Gameplay Effect Handle Structure.

