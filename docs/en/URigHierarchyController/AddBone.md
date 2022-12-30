# AddBone

Adds a bone to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21202822.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new bone - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new bone. If you don't need a parent, pass FRigElementKey().

In Transform: Transform. The transform for the new bone - either in local or global space, based on bTransformInGlobal.

Transform in Global: Boolean. Set this to true if the Transform passed is expressed in global space, false for local space..

In Bone Type: ERigBoneType Enum. The type of bone to add. This can be used to differentiate between imported bones and user defined bones..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created bone..

