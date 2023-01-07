# Lerp_Rotator

根据 Alpha 在 A 和 B 之间进行线性插值（Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19543087.png)

## Inputs

答：旋转器。

B：旋转器。

阿尔法。Float（单精度）。

最短路径。布尔型。

## Outputs

返回值。旋转器。根据 Alpha 在 A 和 B 之间进行线性插值（当 Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。

<hr>

Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19543087.png)

## Inputs

A: Rotator.

B: Rotator.

Alpha: Float (single-precision).

Shortest Path: Boolean.

## Outputs

Return Value: Rotator. Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1).
