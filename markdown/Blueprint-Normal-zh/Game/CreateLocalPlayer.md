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
