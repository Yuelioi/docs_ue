# SetCenterOfMass

设置单个物体的质量中心。这将抵消 physx 计算的质量中心。请注意，在多个体被连接在一起的情况下，质量中心将被设置为整个组。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20283802.png)

## Inputs

在。执行。

目标。原始组件对象参考。

质量中心偏移。矢量。用户指定的该物体的质心偏移，从计算的位置开始。

骨骼名称。名称。如果是 SkeletalMeshComponent，要设置质量中心的体的名称。'无'表示根体。

## Outputs

出：执行。

<hr>

Set the center of mass of a single body. This will offset the physx-calculated center of mass.. Note that in the case where multiple bodies are attached together, the center of mass will be set for the entire group.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20283802.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Center Of Mass Offset: Vector. User specified offset for the center of mass of this object, from the calculated location..

Bone Name: Name. If a SkeletalMeshComponent, name of body to set center of mass of. 'None' indicates root body..

## Outputs

Out: Exec.
