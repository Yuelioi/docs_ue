# SetParentWeight

Sets the weight of a parent below a multi parent element

Target is Rig Hierarchy

## 图示

![]($-20221218-21202041.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

In Weight: Rig Element Weight Structure. The new weight to set for the parent.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

