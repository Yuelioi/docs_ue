# GetRelativeTransform

检索两个提供的骨骼名称之间的相对变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503789.png)

## Inputs

姿势。Anim Pose结构（通过引用）。检索变形的动画姿势。

从骨骼名称。名称。检索相对转换的骨骼的名称。

To Bone Name: 名称。检索相对转换的骨骼的名称。

Space（空间）。EAnimPoseSpaces枚举。检索变换的空间。 

## Outputs

返回值。变换。如果找到的话，在请求的空间中对骨骼的相对变换，否则返回身份变换。
