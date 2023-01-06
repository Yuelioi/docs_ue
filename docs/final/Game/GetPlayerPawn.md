# GetPlayerPawn

返回在指定玩家索引处的玩家控制器的卒。这将不包括没有可用玩家控制器的远程客户端的卒，你可以使用玩家状态列表来处理。

目标是游戏性的统计学

## 图示

![]($-20221218-19062316.png)

## Inputs

球员指数。整数。玩家控制器列表中的索引，首先从本地玩家开始，然后是可用的远程玩家。  

## Outputs

返回值。卒子对象参考。

Returns the pawn for the player controller at the specified player index.. This will not include pawns of remote clients with no available player controller, you can use the player states list for that.

Target is Gameplay Statics

## 图示

![]($-20221218-19062316.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.  

## Outputs

Return Value: Pawn Object Reference.

