# MakeIKRigGoal

添加一个节点，从其成员中创建一个 "IKRigGoal"。

## 图示

![]($-20221218-14553092.png)

## Inputs

姓名。姓名：。名称：。IK目标的名称。必须与目标IKRig资产中的目标名称相对应。

变换源。EIKRigGoalTransformSource Enum.变换源:.设置目标的变换数据的来源。"手动输入 "使用蓝图节点针提供的值。"Bone"（骨骼）使用OptionalSourceBone提供的骨骼的变换。"演员组件 "使用实现IIKGoalCreatorInterface的任何演员组件所提供的变换。

位置。矢量。位置：。IK目标在目标角色组件空间中的位置。

旋转。旋转器。旋转：。目标演员组件在组件空间中的IK目标的旋转。

位置Alpha。Float（单精度）。位置Alpha:。范围为0-1，默认为1.0。将目标位置从输入姿势（0.0）平滑地混合到目标位置（1.0）。

旋转Alpha。Float（单精度）。旋转Alpha:。范围为0-1，默认为1.0。将目标旋转从输入姿势（0.0）平滑地混合到目标旋转（1.0）。

位置空间。EIKRigGoalSpace Enum.位置空间：。目标位置所处的空间。"Additive"（加法）将目标变换视为相对于效应器处的Bone的加法偏移。"Component"（组件）将目标变换视为在骨骼网格演员组件的空间中。"世界 "将目标变换视为在世界的空间中。

旋转空间。EIKRigGoalSpace Enum.旋转空间：。目标旋转所处的空间。"Additive"（加法）将目标变换视为相对于效应器的骨骼的加法偏移。"组件 "将目标变换视为在骨骼网格演员组件的空间中。"世界 "将目标变换视为在世界的空间中。  

## Outputs

IKRig目标：IKRig目标结构。
