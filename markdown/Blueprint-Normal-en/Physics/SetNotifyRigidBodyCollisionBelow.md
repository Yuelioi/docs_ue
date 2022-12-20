# SetNotifyRigidBodyCollisionBelow

Changes the value of bNotifyRigidBodyCollision on all bodies below a given bone

Target is Skeletal Mesh Component

## 图示

![]($-20221218-20285443.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

New Notify Rigid Body Collision: Boolean. The value to assign to bNotifyRigidBodyCollision.

Bone Name: Name. Name of the body to turn hit notifies on (and below).

Include Self: Boolean. Whether to modify the given body (useful for roots with multiple children).  

## Outputs

Out: Exec.

