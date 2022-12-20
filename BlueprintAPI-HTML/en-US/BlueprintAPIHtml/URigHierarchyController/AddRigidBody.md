# AddRigidBody

Adds a rigidbody to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21203410.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new rigidbody - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new rigidbody. If you don't need a parent, pass FRigElementKey().

In Settings: Rig Rigid Body Settings Structure. All of the rigidbody's settings.

In Local Transform: Transform. The transform for the new rigidbody - in the space of the provided parent.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created rigidbody..

