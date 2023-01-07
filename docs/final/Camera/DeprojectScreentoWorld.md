# DeprojectScreentoWorld

将给定的 2D 屏幕空间坐标转换为 3D 世界空间的点和方向。

目标是游戏的静力学

## 图示

![](/uploads/projects/ue-bluprint/20221218-18130513.png)

## Inputs

玩家。玩家控制器对象参考。使用该玩家的视图进行弹射。

屏幕位置。矢量 2D 结构（通过参考）。用于弹出的 2D 屏幕空间。

## Outputs

世界位置。矢量。(输出)世界空间中相应的 3D 位置。

世界方向。Vector.向量。(输出) 在给定的 2D 点上远离摄像机的世界空间方向向量。

返回值。布尔值。

<hr>

Transforms the given 2D screen space coordinate into a 3D world-space point and direction.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18130513.png)

## Inputs

Player: Player Controller Object Reference. Deproject using this player's view..

Screen Position: Vector 2D Structure (by ref). 2D screen space to deproject..

## Outputs

World Position: Vector. (out) Corresponding 3D position in world space..

World Direction: Vector. (out) World space direction vector away from the camera at the given 2d point..

Return Value: Boolean.
