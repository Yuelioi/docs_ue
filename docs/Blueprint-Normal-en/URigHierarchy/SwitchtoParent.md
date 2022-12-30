# SwitchtoParent

Switches a multi parent element to a single parent.. This sets the new parent's weight to 1.0 and disables. weights for all other potential parents.

Target is Rig Hierarchy

## 图示

![]($-20221218-21202581.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

