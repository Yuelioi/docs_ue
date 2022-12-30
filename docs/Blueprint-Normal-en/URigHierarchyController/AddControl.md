# AddControl

Adds a control to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21202941.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new control - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new control. If you don't need a parent, pass FRigElementKey().

In Settings: Rig Control Settings Structure. All of the control's settings.

In Value: Rig Control Value Structure. The value to use for the control.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created control..

