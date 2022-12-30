# ComposeTransforms

Compose two transforms in order: A * B.

Order matters when composing transforms:. A * B will yield a transform that logically first applies A then B to any subsequent transformation.

Example: LocalToWorld = ComposeTransforms(DeltaRotation, LocalToWorld) will change rotation in local space by DeltaRotation.. Example: LocalToWorld = ComposeTransforms(LocalToWorld, DeltaRotation) will change rotation in world space by DeltaRotation.

Target is Kismet Math Library

## 图示

![]($-20221218-19553101.png)

## Inputs

A: Transform (by ref).

B: Transform (by ref).  

## Outputs

Return Value: Transform. New transform: A * B.

