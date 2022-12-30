# TryActivateAbility

Attempts to activate the given ability, will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability

Target is Ability System Component

## 图示

![]($-20221218-17295225.png)

## Inputs

In: Exec.

Target: Ability System Component Object Reference.

Ability to Activate: Gameplay Ability Spec Handle Structure.

Allow Remote Activation: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to activate the given ability, will check costs and requirements before doing so.. Returns true if it thinks it activated, but it may return false positives due to failure later in activation.. If bAllowRemoteActivation is true, it will remotely activate local/server abilities, if false it will only try to locally activate the ability.

