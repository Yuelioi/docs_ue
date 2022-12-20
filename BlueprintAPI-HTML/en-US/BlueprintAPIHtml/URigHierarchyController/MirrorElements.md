# MirrorElements

Mirrors the given elements

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21205017.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Keys: Array of Rig Element Key Structures. The keys of the elements to mirror.

In Settings: Rig Mirror Settings Structure. The settings to use for the mirror operation.

Select New Elements: Boolean. If set to true the new elements will be selected.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Commands: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the mirrored items.

