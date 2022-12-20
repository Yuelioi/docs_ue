# HideBonebyName

Hides the specified bone with name. Currently this just enforces a scale of 0 for the hidden bones.. Compared to HideBone By Index - This keeps track of list of bones and update when LOD changes

Target is Skinned Mesh Component

## 图示

![]($-20221218-18265434.png)

## Inputs

In: Exec.

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of bone to hide.

Phys Body Option: EPhysBodyOp Enum. Option for physics bodies that attach to the bones to be hidden.  

## Outputs

Out: Exec.

