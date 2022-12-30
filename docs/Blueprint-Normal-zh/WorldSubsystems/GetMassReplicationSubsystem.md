# GetMassReplicationSubsystem

获取大规模复制子系统（世界子系统）。

管理NetworkIDs、ClientBubbles和ClientViewers的创建。NetworkIDs是每个复制的代理实体，是唯一的，并在服务器和客户端之间复制的。ClientBubbles与拥有客户端机器的父UNetConnection的播放器控制器有关。ClientViewers与所有拥有父或子UNetConnection到单一客户端机器的播放器控制器有关（分屏等）。

## 图示

![]($-20221218-21381141.png)

## Inputs

## Outputs

返回值。大规模复制子系统对象参考。
