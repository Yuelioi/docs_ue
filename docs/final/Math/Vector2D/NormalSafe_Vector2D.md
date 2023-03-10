# NormalSafe_Vector2D

获取一个规范化的向量副本，根据长度检查是否安全。如果向量的长度太小，不能安全地进行规范化处理，则返回零向量。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19584654.png)

## Inputs

A：向量二维结构。

误差。Float (single-precision).用于归一化的矢量的最小平方长度。

## Outputs

返回值。矢量 2D 结构。如果安全的话，是一个归一化的向量副本，否则是（0,0）。

<hr>

Gets a normalized copy of the vector, checking it is safe to do so based on the length.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19584654.png)

## Inputs

A: Vector 2D Structure.

Tolerance: Float (single-precision). Minimum squared length of vector for normalization..

## Outputs

Return Value: Vector 2D Structure. A normalized copy of the vector if safe, (0,0) otherwise..
