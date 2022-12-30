# BatchUpdateInstancesTransform

Update the transform for a number of instances.

Target is Instanced Static Mesh Component

## 图示

![]($-20221218-18243316.png)

## Inputs

In: Exec.

Target: Instanced Static Mesh Component Object Reference.

Start Instance Index: Integer. The starting index of the instances to update.

Num Instances: Integer. The number of instances to update.

New Instances Transform: Transform (by ref). The new transform.

World Space: Boolean. If true, the new transform is interpreted as a World Space transform, otherwise it is interpreted as Local Space.

Mark Render State Dirty: Boolean. If true, the change should be visible immediately. If you are updating many instances you should only set this to true for the last instance..

Teleport: Boolean. Whether or not the instances physics should be moved normally, or teleported (moved instantly, ignoring velocity)..  

## Outputs

Out: Exec.

Return Value: Boolean. True on success..

