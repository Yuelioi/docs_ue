# CreateLocalPlayer

为这个游戏创建一个新的本地玩家，用于本地多人游戏等情况。

目标是游戏性的统计学

## 图示

![]($-20221218-19052484.png)

## Inputs

在。执行。

控制器标识。整数。物理控制器的ID，它应该控制新创建的播放器。值为-1时，指定使用下一个可用的ID。

生成玩家控制器。布尔值。是否应该立即为这个玩家生成一个玩家控制器。如果是假的，玩家控制器将不会自动创建，直到过渡到下一张地图。

## Outputs

出：执行。

返回值。播放器控制器对象参考。如果有创建的播放器控制器，则为创建的播放器控制器。

Create a new local player for this game, for cases like local multiplayer.

Target is Gameplay Statics

## 图示

![]($-20221218-19052484.png)

## Inputs

In: Exec.

Controller Id: Integer. The ID of the physical controller that the should control the newly created player. A value of -1 specifies to use the next available ID.

Spawn Player Controller: Boolean. Whether a player controller should be spawned immediately for this player. If false a player controller will not be created automatically until transition to the next map..  

## Outputs

Out: Exec.

Return Value: Player Controller Object Reference. The created player controller if one is created..

