# AddInputVector

将给定的向量添加到世界空间的累积输入中。输入向量的大小通常在 0 到 1 之间。它们在一帧中被累积，然后在运动更新时作为加速度被应用。

目标是卒子运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184139.png)

## Inputs

在。执行。

目标。卒子运动组件对象参考。

世界向量。向量。

力量。布尔值。如果为真，总是添加输入，忽略 IsMoveInputIgnored（）的结果。

## Outputs

出：执行。

<hr>

Adds the given vector to the accumulated input in world space. Input vectors are usually between 0 and 1 in magnitude.. They are accumulated during a frame then applied as acceleration during the movement update.

Target is Pawn Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184139.png)

## Inputs

In: Exec.

Target: Pawn Movement Component Object Reference.

World Vector: Vector.

Force: Boolean. If true always add the input, ignoring the result of IsMoveInputIgnored()..

## Outputs

Out: Exec.
