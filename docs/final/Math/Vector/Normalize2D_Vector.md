# Normalize2D_Vector

获取矢量的二维分量的归一化单位拷贝，确保其安全。Z被设置为零。如果矢量长度太小，无法进行归一化处理，则返回零矢量。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19571430.png)

## Inputs

答：向量。

误差。Float (single-precision).最小向量长度的平方...  

## Outputs

返回值。向量。如果安全的话，是归一化的拷贝，否则是（0,0,0）。

Gets a normalized unit copy of the 2D components of the vector, ensuring it is safe to do so. Z is set to zero.. Returns zero vector if vector length is too small to normalize.

Target is Kismet Math Library

## 图示

![]($-20221218-19571430.png)

## Inputs

A: Vector.

Tolerance: Float (single-precision). Minimum squared vector length..  

## Outputs

Return Value: Vector. Normalized copy if safe, (0,0,0) otherwise..

