# SetBoneTransform

设置骨骼在要求的空间中的变换。

目标是控制钻机组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18320207.png)

## Inputs

在。执行。

目标。控制钻机组件对象参考。

骨头名称。名称。要设置变换的骨骼名称。

Transform（变换）。变换。

Space（空间）：空间。EControlRigComponentSpace 枚举。设置变换的空间。

Weight：重量。Float（单精度）。应该应用多少变化的权重（0.0 到 1.0）。

传播到子代。布尔值。如果为真，子骨将与受影响的骨一起被移动。

## Outputs

输出。执行。

<hr>

Sets the transform of the bone in the requested space

Target is Control Rig Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18320207.png)

## Inputs

In: Exec.

Target: Control Rig Component Object Reference.

Bone Name: Name. The name of the bone to set the transform for.

Transform: Transform.

Space: EControlRigComponentSpace Enum. The space to set the transform in.

Weight: Float (single-precision). The weight of how much the change should be applied (0.0 to 1.0).

Propagate to Children: Boolean. If true the child bones will be moved together with the affected bone.

## Outputs

Out: Exec.
