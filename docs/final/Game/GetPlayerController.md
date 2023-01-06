# GetPlayerController

返回在遍历本地和可用的远程播放器控制器时发现的播放器控制器。在网络客户端，这将只包括本地玩家，因为远程玩家控制器是不可用的。只要没有新的玩家加入或离开，索引将是一致的，但它在不同的客户端和服务器上将是不一样的。

目标是游戏性的统计学

## 图示

![]($-20221218-19062196.png)

## Inputs

球员指数。整数。玩家控制器列表中的索引，首先从本地玩家开始，然后是可用的远程玩家。  

## Outputs

返回值。播放器控制器对象参考。

Returns the player controller found while iterating through the local and available remote player controllers.. On a network client, this will only include local players as remote player controllers are not available.. The index will be consistent as long as no new players join or leave, but it will not be the same across different clients and servers.

Target is Gameplay Statics

## 图示

![]($-20221218-19062196.png)

## Inputs

Player Index: Integer. Index in the player controller list, starting first with local players and then available remote ones.  

## Outputs

Return Value: Player Controller Object Reference.

