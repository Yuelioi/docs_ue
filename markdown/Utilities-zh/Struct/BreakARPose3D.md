# BreakARPose3D

添加一个节点，将'ARPose3D'分解成其成员字段

## 图示

![]($-20221218-14311419.png)

## Inputs

ARPose 3D: ARPose 3D结构（通过引用）。 

## Outputs

Skeleton Definition（骨架定义）。ARSkeleton Definition结构。Skeleton Definition: 骨架定义：。这个骨架的定义。

Joint Transforms（关节变换）。变换的数组。Joint Transforms:（关节变换）。模型空间中每个关节的变换。

Is Joint Tracked（联合追踪）。布尔运算数组。关节是否被跟踪：。表示每个关节是否被跟踪的标志。

联合变换空间。EARJointTransformSpace枚举。关节变换空间。
