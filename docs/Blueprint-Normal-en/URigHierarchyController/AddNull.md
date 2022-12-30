# AddNull

Adds a null to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21203159.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new null - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new null. If you don't need a parent, pass FRigElementKey().

In Transform: Transform. The transform for the new null - either in local or global null, based on bTransformInGlobal.

Transform in Global: Boolean. Set this to true if the Transform passed is expressed in global null, false for local null..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created null..

