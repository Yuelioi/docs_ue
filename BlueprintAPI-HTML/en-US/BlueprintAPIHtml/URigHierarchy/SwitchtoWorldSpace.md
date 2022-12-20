# SwitchtoWorldSpace

Switches a multi parent element to world space.. This injects a world space reference.

Target is Rig Hierarchy

## 图示

![]($-20221218-21202704.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

