# GetRefBonePose

检索提供的骨骼名称的参考姿势变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503338.png)

## Inputs

姿势。Anim Pose 结构 (by ref). 检索转换的Anim Pose。

骨骼名称。名称。要检索的骨骼的名称。

空间。EAnimPoseSpaces枚举。应该检索的变换空间。 

## Outputs

返回值。变换（通过引用）。如果找到的话，为骨骼请求的空间中的变换，否则返回身份变换。
