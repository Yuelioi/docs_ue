# IsIdentity_Quat

检查该四元数是否为身份四元数。假设被测试的四元数是正常化的。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19525695.png)

## Inputs

问：Quat 结构（由参考文献）。

误差。Float（单精度）。与 Identity Quaternion 比较的误差容限。

## Outputs

返回值：布尔值。如果四元数是一个规范化的身份四元数，则为 true。

<hr>

Checks whether this Quaternion is an Identity Quaternion.. Assumes Quaternion tested is normalized.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19525695.png)

## Inputs

Q: Quat Structure (by ref).

Tolerance: Float (single-precision). Error tolerance for comparison with Identity Quaternion..

## Outputs

Return Value: Boolean. true if Quaternion is a normalized Identity Quaternion..
