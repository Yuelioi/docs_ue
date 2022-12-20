# BreakStateTreeTransitionResult

Adds a node that breaks a 'StateTreeTransitionResult' into its member fields

## 图示

![]($-20221218-14434429.png)

## Inputs

State Tree Transition Result: State Tree Transition Result Structure (by ref).  

## Outputs

Source: State Tree State Status Structure. Source:. State where the transition started..

Target: State Tree Handle Structure. Target:. Transition target state.

Next: State Tree Handle Structure. Next:. Selected state, can be different from Transition, if Transition is a selector state..

Current: State Tree Handle Structure. Current:. Current state, update as we execute the tree..

