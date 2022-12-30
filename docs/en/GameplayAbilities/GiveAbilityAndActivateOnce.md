# GiveAbilityAndActivateOnce

Grants a Gameplay Ability, activates it once, and removes it.. This will be ignored if the actor is not authoritative.

Target is Ability System Component

## 图示

![]($-20221218-19082383.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Ability Class: Gameplay Ability Class Reference. Type of ability to grant.

Level: Integer. Level to grant the ability at.

Input ID: Integer. Input ID value to bind ability activation to..  

## Outputs

Out: Exec.

Return Value: Gameplay Ability Spec Handle Structure.

