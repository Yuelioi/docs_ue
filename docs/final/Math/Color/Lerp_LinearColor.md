# Lerp_LinearColor

根据 Alpha 在 A 和 B 之间进行线性插值（Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19473053.png)

## Inputs

答：线性色彩结构。

B：线性色彩结构。

阿尔法。Float（单精度）。

## Outputs

返回值。线性颜色结构。根据 Alpha 在 A 和 B 之间进行线性插值（当 Alpha=0 时为 A 的 100%，当 Alpha=1 时为 B 的 100%）。

<hr>

Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19473053.png)

## Inputs

A: Linear Color Structure.

B: Linear Color Structure.

Alpha: Float (single-precision).

## Outputs

Return Value: Linear Color Structure. Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1).
