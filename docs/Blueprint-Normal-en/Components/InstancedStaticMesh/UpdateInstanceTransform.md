# UpdateInstanceTransform

Update the transform for the instance specified.

Target is Instanced Static Mesh Component

## 图示

![]($-20221218-18244691.png)

## Inputs

In: Exec.

Target: Instanced Static Mesh Component Object Reference.

Instance Index: Integer. The index of the instance to update.

New Instance Transform: Transform (by ref). The new transform.

World Space: Boolean. If true, the new transform is interpreted as a World Space transform, otherwise it is interpreted as Local Space.

Mark Render State Dirty: Boolean. If true, the change should be visible immediately. If you are updating many instances you should only set this to true for the last instance..

Teleport: Boolean. Whether or not the instance's physics should be moved normally, or teleported (moved instantly, ignoring velocity)..  

## Outputs

Out: Exec.

Return Value: Boolean. True on success..

