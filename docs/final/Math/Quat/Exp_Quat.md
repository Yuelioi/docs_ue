# Exp_Quat

与 Log()结合使用。假设四元数的 W=0，V=theta*v（其中|v|=1）。Exp(q) = (sin(theta)*v, cos(theta))

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19525305.png)

## Inputs

问：Quat 结构（由参考文献）。

## Outputs

返回值。Quat 结构。与 Log()结合使用。假设一个四元数，W=0，V=theta*v（其中|v|=1）。Exp(q) = (sin(theta)*v, cos(theta))。

<hr>

Used in combination with Log().. Assumes a quaternion with W=0 and V=theta*v (where |v| = 1).. Exp(q) = (sin(theta)*v, cos(theta))

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19525305.png)

## Inputs

Q: Quat Structure (by ref).

## Outputs

Return Value: Quat Structure. Used in combination with Log().. Assumes a quaternion with W=0 and V=theta*v (where |v| = 1).. Exp(q) = (sin(theta)*v, cos(theta)).
