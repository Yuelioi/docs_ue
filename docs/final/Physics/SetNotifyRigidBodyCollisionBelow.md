# SetNotifyRigidBodyCollisionBelow

改变给定骨骼下方所有体的 bNotifyRigidBodyCollision 的值。

目标是骨架网组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285443.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

新的通知刚体碰撞。布尔值。指定给 bNotifyRigidBodyCollision 的值。

骨骼名称。名称。要转而通知击中的身体的名称（及以下）。

Include Self：布尔值。是否修改给定的主体（对有多个孩子的根有用）。

## Outputs

出：执行。

<hr>

Changes the value of bNotifyRigidBodyCollision on all bodies below a given bone

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285443.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

New Notify Rigid Body Collision: Boolean. The value to assign to bNotifyRigidBodyCollision.

Bone Name: Name. Name of the body to turn hit notifies on (and below).

Include Self: Boolean. Whether to modify the given body (useful for roots with multiple children).

## Outputs

Out: Exec.
