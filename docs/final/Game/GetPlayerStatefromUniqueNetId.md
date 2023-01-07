# GetPlayerStatefromUniqueNetId

返回与传入的在线 ID 相匹配的玩家状态，如果无效则为空。这将在客户端和服务器上对本地和远程玩家都有效。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062551.png)

## Inputs

独特的标识。独特的网络 ID 结构（由裁判）。球员的唯一网络/在线 ID。

## Outputs

返回值。播放器状态对象参考。

<hr>

Returns the player state that matches the passed in online id, or null for an invalid one.. This will work on both the client and server for local and remote players.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19062551.png)

## Inputs

Unique Id: Unique Net Id Structure (by ref). The player's unique net/online id.

## Outputs

Return Value: Player State Object Reference.
