# NormalizeInPlaceXYZ_Vector4

如果这个向量足够大，就地进行归一化处理，否则就将其设置为（0,0,0,0）。W 元素被忽略，返回的向量有 W=0。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19591870.png)

## Inputs

在。执行。

答：向量 4 结构（由参考文献）。

误差。Float (single-precision).用于归一化的矢量的最小平方长度。

## Outputs

出：执行。

<hr>

Normalize this vector in-place if it is large enough or set it to (0,0,0,0) otherwise. The W element is ignored and the returned vector has W=0.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19591870.png)

## Inputs

In: Exec.

A: Vector 4 Structure (by ref).

Tolerance: Float (single-precision). Minimum squared length of vector for normalization..

## Outputs

Out: Exec.
