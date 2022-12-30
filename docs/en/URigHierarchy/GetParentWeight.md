# GetParentWeight

Returns the weight of a parent below a multi parent element

Target is Rig Hierarchy

## 图示

![]($-20221218-21192764.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

Initial: Boolean. If true the initial weights will be used.  

## Outputs

Return Value: Rig Element Weight Structure. Returns the weight of a parent below a multi parent element, or FLT_MAX if the parent is invalid.

