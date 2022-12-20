# GetGameplayEffectCount

Get the count of the specified source effect on the ability system component. For non-stacking effects, this is the sum of all active instances.. For stacking effects, this is the sum of all valid stack counts. If an instigator is specified, only effects from that instigator are counted.

Target is Ability System Component

## 图示

![]($-20221218-19085665.png)

## Inputs

Target: Ability System Component Object Reference.

Source Gameplay Effect: Gameplay Effect Class Reference. Effect to get the count of.

Optional Instigator Filter Component: Ability System Component Object Reference. If specified, only count effects applied by this ability system component.

Enforce on Going Check: Boolean.  

## Outputs

Return Value: Integer. Count of the specified source effect.

