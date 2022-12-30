# TransformtoBoneSpace

Transform a location/rotation from world space to bone relative space.. This is handy if you know the location in world space for a bone attachment, as AttachComponent takes location/rotation in bone-relative space.

Target is Skinned Mesh Component

## 图示

![]($-20221218-18272063.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of bone.

In Position: Vector. Input position.

In Rotation: Rotator. Input rotation.  

## Outputs

Out Position: Vector. (out) Transformed position.

Out Rotation: Rotator. (out) Transformed rotation.

