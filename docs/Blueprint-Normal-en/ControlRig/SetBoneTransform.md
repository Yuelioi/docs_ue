# SetBoneTransform

Sets the transform of the bone in the requested space

Target is Control Rig Component

## 图示

![]($-20221218-18320207.png)

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

