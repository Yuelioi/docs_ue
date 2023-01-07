# GetPlayerState

返回在游戏状态的 PlayerArray 中给定索引的玩家状态。这在客户端和服务器上都有效，而且索引将是一致的。在初始复制之后，所有的客户端和服务器都可以访问所有连接的玩家的 PlayerStates。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062431.png)

## Inputs

球员状态指数。整数。游戏状态的 PlayerArray 中的索引。

## Outputs

返回值。播放器状态对象参考。

<hr>

Returns the player state at the given index in the game state's PlayerArray.. This will work on both the client and server and the index will be consistent.. After initial replication, all clients and the server will have access to PlayerStates for all connected players.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062431.png)

## Inputs

Player State Index: Integer. Index into the game state's PlayerArray.

## Outputs

Return Value: Player State Object Reference.
