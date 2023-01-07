# GetLastMovementInputVector

返回世界空间中被 ConsumeMovementInputVector()处理的最后一个输入矢量，这通常由 Pawn 或 PawnMovementComponent 完成。任何需要知道最后影响运动的输入的用户都应该使用这个函数。例如，一个动画更新会希望使用这个，因为默认情况下，一帧中的更新顺序是：。PlayerController（设备输入）-> MovementComponent -> Pawn -> Mesh（动画）。

目标是卒子

## 图示

![](/uploads/projects/ue-bluprint/20221218-20191670.png)

## Inputs

目标。卒子对象参考。

## Outputs

返回值。矢量。世界空间中被 ConsumeMovementInputVector()处理的最后一个输入向量。

<hr>

Return the last input vector in world space that was processed by ConsumeMovementInputVector(), which is usually done by the Pawn or PawnMovementComponent.. Any user that needs to know about the input that last affected movement should use this function.. For example an animation update would want to use this, since by default the order of updates in a frame is:. PlayerController (device input) -> MovementComponent -> Pawn -> Mesh (animations)

Target is Pawn

## 图示

![](/uploads/projects/ue-bluprint/20221218-20191670.png)

## Inputs

Target: Pawn Object Reference.

## Outputs

Return Value: Vector. The last input vector in world space that was processed by ConsumeMovementInputVector()..
