# GetParentWeightArray

Returns the weights of all parents below a multi parent element

Target is Rig Hierarchy

## 图示

![]($-20221218-21192876.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

Initial: Boolean. If true the initial weights will be used.  

## Outputs

Return Value: Array of Rig Element Weight Structures. Returns the weight of a parent below a multi parent element, or FLT_MAX if the parent is invalid.

