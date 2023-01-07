# SetPhysicsAngularVelocityinRadia-

设置单个物体的角速度。这个应该谨慎使用--使用 AddTorque 或 AddImpulse 可能更好。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285789.png)

## Inputs

在。执行。

目标。原始组件对象参考。

New Ang Vel:矢量。应用于身体的新角速度，单位是弧度/秒。

添加到当前：布尔值。如果为真，NewAngVel 将被添加到主体的现有角速度中。

骨骼名称。名称。如果是 SkeletalMeshComponent，要修改角速度的主体名称。'无'表示根体。

## Outputs

出：执行。

<hr>

Set the angular velocity of a single body.. This should be used cautiously - it may be better to use AddTorque or AddImpulse.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285789.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

New Ang Vel: Vector. New angular velocity to apply to body, in radians per second..

Add to Current: Boolean. If true, NewAngVel is added to the existing angular velocity of the body..

Bone Name: Name. If a SkeletalMeshComponent, name of body to modify angular velocity of. 'None' indicates root body..

## Outputs

Out: Exec.
