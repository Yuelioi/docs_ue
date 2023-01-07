# RotationAxis_Quat

获取四元数的旋转轴。这是发生旋转的轴，用于将标准坐标系转换为目标方向。对于没有旋转轴的四元数，将返回 FVector(1,0,0)。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19530979.png)

## Inputs

问：Quat 结构（由参考文献）。

## Outputs

返回值。矢量。获取四元数的旋转轴。这是发生旋转的轴，用于将标准坐标系转换为目标方向。对于没有这种旋转的四元数，将返回 FVector(1,0,0)。

<hr>

Get the axis of rotation of the Quaternion.. This is the axis around which rotation occurs to transform the canonical coordinate system to the target orientation.. For the identity Quaternion which has no such rotation, FVector(1,0,0) is returned.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19530979.png)

## Inputs

Q: Quat Structure (by ref).

## Outputs

Return Value: Vector. Get the axis of rotation of the Quaternion.. This is the axis around which rotation occurs to transform the canonical coordinate system to the target orientation.. For the identity Quaternion which has no such rotation, FVector(1,0,0) is returned..
