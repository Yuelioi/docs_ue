# Lerp_Transform

根据 Alpha 在 A 和 B 之间进行线性插值（Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19554032.png)

## Inputs

答：转变（通过参考）。

B：转变（由裁判）。

阿尔法。Float（单精度）。

Interp 模式。ELerpInterpolationMode Enum.

## Outputs

返回值。变换。基于 Alpha 在 A 和 B 之间进行线性插值（Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。

<hr>

Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1).

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19554032.png)

## Inputs

A: Transform (by ref).

B: Transform (by ref).

Alpha: Float (single-precision).

Interp Mode: ELerpInterpolationMode Enum.

## Outputs

Return Value: Transform. Linearly interpolates between A and B based on Alpha (100% of A when Alpha=0 and 100% of B when Alpha=1)..
