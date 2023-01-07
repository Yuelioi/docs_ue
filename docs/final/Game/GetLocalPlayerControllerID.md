# GetLocalPlayerControllerID

获取一个玩家正在使用的物理控制器 ID。这只适用于本地玩家的控制器。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19061054.png)

## Inputs

玩家。播放器控制器对象参考。要获得播放器 ID 的播放器控制器。

## Outputs

返回值。整数。被传入的播放器的 ID。如果没有分配给被传入的播放器的物理控制器，则为-1。

<hr>

Gets what physical controller ID a player is using. This only works for local player controllers.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19061054.png)

## Inputs

Player: Player Controller Object Reference. The player controller of the player to get the ID of.

## Outputs

Return Value: Integer. The ID of the passed in player. -1 if there is no physical controller assigned to the passed in player.
