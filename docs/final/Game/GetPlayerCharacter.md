# GetPlayerCharacter

返回指定播放器索引处的播放器控制器的卒，如果卒不是一个角色，将返回空。这将不包括没有可用的玩家控制器的远程客户端的角色，你可以为此遍历 PlayerStates 列表。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062082.png)

## Inputs

球员指数。整数。玩家控制器列表中的索引，首先从本地玩家开始，然后是可用的远程玩家。

## Outputs

返回值。字符对象参考。

<hr>

Returns the pawn for the player controller at the specified player index, will return null if the pawn is not a character.. This will not include characters of remote clients with no available player controller, you can iterate the PlayerStates list for that.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062082.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.

## Outputs

Return Value: Character Object Reference.
