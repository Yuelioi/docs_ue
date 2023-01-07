# NormalizeXYZ_Vector4

获取矢量的归一化单位拷贝，确保基于长度的安全。W 元素被忽略，返回的向量有 W=0。如果向量长度太小，无法安全地进行归一化处理，则返回零向量。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19591981.png)

## Inputs

答：向量 4 结构（由参考文献）。

误差。Float (single-precision).最小向量长度的平方...

## Outputs

返回值。矢量 4 结构。如果安全的话，是一个规范化的拷贝，否则是(0,0,0)。

<hr>

Gets a normalized unit copy of the vector, ensuring it is safe to do so based on the length. The W element is ignored and the returned vector has W=0.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19591981.png)

## Inputs

A: Vector 4 Structure (by ref).

Tolerance: Float (single-precision). Minimum squared vector length..

## Outputs

Return Value: Vector 4 Structure. A normalized copy if safe, (0,0,0) otherwise..
