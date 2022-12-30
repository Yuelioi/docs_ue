# SetParentWeightArray

Sets the all of the weights of the parents of a multi parent element

Target is Rig Hierarchy

## 图示

![]($-20221218-21202157.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Weights: Array of Rig Element Weight Structures. The new weights to set for the parents.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

