# BreakGameplayTargetDataFilter

Adds a node that breaks a 'GameplayTargetDataFilter' into its member fields

## 图示

![]($-20221218-14364284.png)

## Inputs

Gameplay Target Data Filter: Gameplay Target Data Filter Structure (by ref).  

## Outputs

Required Actor Class: Actor Class Reference. Required Actor Class:. Subclass actors must be to pass the filter..

Self Filter: ETargetDataFilterSelf Enum. Self Filter:. Filter based on whether or not this actor is "self.".

Reverse Filter: Boolean. Reverse Filter:. Reverses the meaning of the filter, so it will exclude all actors that pass..

