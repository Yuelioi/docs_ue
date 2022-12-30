# GetRelativetoRefPoseTransform

检索参考值和动画骨骼变换之间的相对变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503681.png)

## Inputs

姿势。Anim Pose结构（通过参考）。检索变形的Anim Pose。

骨骼名称。名称。要检索相对变换的骨骼名称。

Space（空间）。EAnimPoseSpaces枚举。检索变换的空间。 

## Outputs

返回值。变换。如果找到的话，在请求的空间中对骨骼的相对变换，否则返回身份变换。
