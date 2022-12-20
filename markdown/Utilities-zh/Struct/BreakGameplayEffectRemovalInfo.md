# BreakGameplayEffectRemovalInfo

Adds a node that breaks a 'GameplayEffectRemovalInfo' into its member fields

## 图示

![]($-20221218-14364025.png)

## Inputs

Gameplay Effect Removal Info: Gameplay Effect Removal Info Structure (by ref).  

## Outputs

Premature Removal: Boolean. Premature Removal:. True when the gameplay effect's duration has not expired, meaning the gameplay effect is being forcefully removed..

Stack Count: Integer. Stack Count:. Number of Stacks this gameplay effect had before it was removed..

Effect Context: Gameplay Effect Context Handle Structure. Effect Context:. Actor this gameplay effect was targeting..

