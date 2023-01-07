# MoveUpdatedComponent

将我们的 UpdateComponent 移动到给定的 Delta，并将旋转设置为 NewRotation。如果启用的话，尊重平面约束。

目标是运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18250063.png)

## Inputs

在。执行。

目标。运动组件对象参考。

三角洲。矢量。

新的旋转。旋转器。

扫频。布尔值。

远距传输。布尔值

## Outputs

输出。执行：执行。

Out Hit: 命中结果结构。

返回值。布尔值。如果发生一些运动，则为真，如果没有发生运动，则为假。任何撞击的结果将被存储在 OutHit.中。

<hr>

Moves our UpdatedComponent by the given Delta, and sets rotation to NewRotation.. Respects the plane constraint, if enabled.

Target is Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18250063.png)

## Inputs

In: Exec.

Target: Movement Component Object Reference.

Delta: Vector.

New Rotation: Rotator.

Sweep: Boolean.

Teleport: Boolean.

## Outputs

Out: Exec.

Out Hit: Hit Result Structure.

Return Value: Boolean. True if some movement occurred, false if no movement occurred. Result of any impact will be stored in OutHit..
