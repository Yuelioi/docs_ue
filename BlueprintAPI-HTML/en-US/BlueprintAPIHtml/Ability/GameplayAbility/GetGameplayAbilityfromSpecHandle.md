# GetGameplayAbilityfromSpecHandle

Provides the Gameplay Ability object associated with an Ability Spec Handle. This can be either an instanced ability, or in the case of shared abilities, the Class Default Object

Target is Ability System Blueprint Library

## 图示

![]($-20221218-17305333.png)

## Inputs

Ability System: Ability System Component Object Reference.

Ability Spec Handle: Gameplay Ability Spec Handle Structure (by ref).  

## Outputs

Is Instance: Boolean. Set to true if this is an instanced ability instead of a shared CDO.

Return Value: Gameplay Ability Object Reference. Pointer to the Gameplay Ability object.

