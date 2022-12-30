# ComposeTransforms

按顺序组成两个变换。A * B。

组成变换时，顺序很重要：。A * B将产生一个转换，在逻辑上首先应用A，然后是B到任何后续的转换。

例子。LocalToWorld = ComposeTransforms(DeltaRotation, LocalToWorld) 将通过DeltaRotation改变本地空间的旋转。例子。LocalToWorld = ComposeTransforms(LocalToWorld, DeltaRotation) 将通过DeltaRotation改变世界空间的旋转。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19553101.png)

## Inputs

答：转变（通过参考）。

B：转变（由裁判）。  

## Outputs

返回值。变换。新的变换。A * B。
