# TransformtoBoneSpace

将一个位置/旋转从世界空间转换到骨骼相对空间。如果你知道一个骨骼附件在世界空间中的位置，这就很方便了，因为 AttachComponent 需要在相对于骨骼的空间中获取位置/旋转。

目标是带皮的网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18272063.png)

## Inputs

目标。蒙皮网状结构组件对象参考。

骨骼名称。名称。骨头的名称。

In Position（位置）。Vector（向量）。输入位置。

在旋转。旋转器。输入旋转。

## Outputs

输出位置。矢量。(out) 变换后的位置。

输出旋转。旋转器。(输出) 变换后的旋转。

<hr>

Transform a location/rotation from world space to bone relative space.. This is handy if you know the location in world space for a bone attachment, as AttachComponent takes location/rotation in bone-relative space.

Target is Skinned Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18272063.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of bone.

In Position: Vector. Input position.

In Rotation: Rotator. Input rotation.

## Outputs

Out Position: Vector. (out) Transformed position.

Out Rotation: Rotator. (out) Transformed rotation.
