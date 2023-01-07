# ComposeTransforms

按顺序组成两个变换。A \* B。

组成变换时，顺序很重要：。A \* B 将产生一个转换，在逻辑上首先应用 A，然后是 B 到任何后续的转换。

例子。LocalToWorld = ComposeTransforms(DeltaRotation, LocalToWorld) 将通过 DeltaRotation 改变本地空间的旋转。例子。LocalToWorld = ComposeTransforms(LocalToWorld, DeltaRotation) 将通过 DeltaRotation 改变世界空间的旋转。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19553101.png)

## Inputs

答：转变（通过参考）。

B：转变（由裁判）。

## Outputs

返回值。变换。新的变换。A \* B。

<hr>

Compose two transforms in order: A \* B.

Order matters when composing transforms:. A \* B will yield a transform that logically first applies A then B to any subsequent transformation.

Example: LocalToWorld = ComposeTransforms(DeltaRotation, LocalToWorld) will change rotation in local space by DeltaRotation.. Example: LocalToWorld = ComposeTransforms(LocalToWorld, DeltaRotation) will change rotation in world space by DeltaRotation.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19553101.png)

## Inputs

A: Transform (by ref).

B: Transform (by ref).

## Outputs

Return Value: Transform. New transform: A \* B.
