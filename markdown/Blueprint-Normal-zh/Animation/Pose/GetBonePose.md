# GetBonePose

从一个姿势中为提供的骨骼名称检索变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503228.png)

## Inputs

姿势。Anim Pose结构（通过引用）。检索变形的动画姿势。

骨骼名称。名称。要检索的骨骼的名称。

空间。EAnimPoseSpaces枚举。应该检索的变换空间。 

## Outputs

返回值。变换（通过引用）。如果找到的话，为骨骼请求的空间中的变换，否则返回身份变换。
