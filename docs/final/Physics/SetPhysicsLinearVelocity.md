# SetPhysicsLinearVelocity

设置单个体的线速度。这个应该谨慎使用--使用AddForce或AddImpulse可能更好。

目标是原始组件

## 图示

![]($-20221218-20290027.png)

## Inputs

在。执行。

目标。原始组件对象参考。

新维尔。矢量。新的线性速度，适用于物理学...

添加到当前速度：布尔值。如果为真，NewVel将被添加到体的现有速度中。

骨骼名称。名称。如果是SkeletalMeshComponent，要修改速度的主体名称。'无'表示根体。

## Outputs

出：执行。

Set the linear velocity of a single body.. This should be used cautiously - it may be better to use AddForce or AddImpulse.

Target is Primitive Component

## 图示

![]($-20221218-20290027.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

New Vel: Vector. New linear velocity to apply to physics..

Add to Current: Boolean. If true, NewVel is added to the existing velocity of the body..

Bone Name: Name. If a SkeletalMeshComponent, name of body to modify velocity of. 'None' indicates root body..  

## Outputs

Out: Exec.

