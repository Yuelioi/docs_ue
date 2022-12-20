# AddCurve

Adds a curve to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21203051.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new curve - will eventually be corrected by the namespace.

In Value: Float (single-precision). The value to use for the curve.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created curve..

