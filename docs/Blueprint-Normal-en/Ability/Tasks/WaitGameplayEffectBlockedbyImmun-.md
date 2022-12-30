# WaitGameplayEffectBlockedbyImmun-

Listens for GE immunity. By default this means "this hero blocked a GE due to immunity". Setting OptionalExternalTarget will listen for a GE being blocked on an external target. Note this only works on the server.

Target is Ability Task Wait Gameplay Effect Blocked Immunity

## 图示

![]($-20221218-17334602.png)

## Inputs

In: Exec.

Source Tag Requirements: Gameplay Tag Requirements Structure.

Target Tag Requirements: Gameplay Tag Requirements Structure.

Optional External Target: Actor Object Reference.

Only Trigger Once: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Effect Blocked Immunity Object Reference.

Blocked: Exec. Blocked.

Blocked Spec: Gameplay Effect Spec Handle Structure.

Immunity Gameplay Effect Handle: Active Gameplay Effect Handle Structure.

