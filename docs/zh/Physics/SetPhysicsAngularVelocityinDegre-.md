# SetPhysicsAngularVelocityinDegre-

设置单个物体的角速度。这个应该谨慎使用--使用AddTorque或AddImpulse可能更好。

目标是原始组件

## 图示

![]($-20221218-20285676.png)

## Inputs

在。执行。

目标。原始组件对象参考。

New Ang Vel:矢量。应用于身体的新角速度，单位是度/秒。

添加到当前：布尔值。如果为真，NewAngVel将被添加到主体的现有角速度中。

骨骼名称。名称。如果是SkeletalMeshComponent，要修改角速度的主体名称。'无'表示根体。

## Outputs

出：执行。
