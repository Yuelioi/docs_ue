# RemoveActiveGameplayEffectbySour-

Remove active gameplay effects whose backing definition are the specified gameplay effect class

Target is Ability System Component

## 图示

![]($-20221218-19090719.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Gameplay Effect: Gameplay Effect Class Reference. Class of gameplay effect to remove; Does nothing if left null.

Instigator Ability System Component: Ability System Component Object Reference. If specified, will only remove gameplay effects applied from this instigator ability system component.

Stacks to Remove: Integer. Number of stacks to remove, -1 means remove all.  

## Outputs

Out: Exec.

