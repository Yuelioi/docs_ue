# Normalize

获取矢量的归一化单位拷贝，确保基于长度可以安全地这样做。如果向量的长度太小，无法安全地进行归一化处理，则返回零向量。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19571297.png)

## Inputs

答：向量。

误差。Float (single-precision).最小向量长度的平方...

## Outputs

返回值。向量。如果安全的话，是一个归一化的拷贝，否则是（0,0,0）。

<hr>

Gets a normalized unit copy of the vector, ensuring it is safe to do so based on the length.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19571297.png)

## Inputs

A: Vector.

Tolerance: Float (single-precision). Minimum squared vector length..

## Outputs

Return Value: Vector. A normalized copy if safe, (0,0,0) otherwise..
