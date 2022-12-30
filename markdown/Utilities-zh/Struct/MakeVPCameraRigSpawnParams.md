# MakeVPCameraRigSpawnParams

添加一个节点，从其成员中创建一个 "VPCameraRigSpawnParams"。

## 图示

![]($-20221218-15042133.png)

## Inputs

使用世界空间。Boolean.使用世界空间：。使用世界空间（相对于本地空间）的点。

使用第一点作为产卵地点。布尔值。使用第一点作为产卵地点：。使用输入的第一个矢量作为产卵变换。导致RigTransform被完全忽略。

线性逼近模式。EVPCameraRigSpawnLinearApproximationMode枚举。线性逼近模式：.导致花键点的线性逼近被生成，而不是纯粹依靠传入的点/曲线。

线性近似参数。Float (single-precision).Linear Approximation Param:.只有在LinearApproximationMode不是None.时才会使用。当模式为密度时：。参见FSplinePositionLinearApproximation::Build。当模式为IntegrationStep时：。近似点之间的整合步骤（以CM为单位）。减少这个值会。增加花键点的数量，因此会增加精度。(以增加复杂性为代价)。

## Outputs

VPCamera Rig Spawn Params。VPCamera Rig Spawn Params结构。
