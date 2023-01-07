# GetMassReplicationSubsystem

获取大规模复制子系统（世界子系统）。

管理 NetworkIDs、ClientBubbles 和 ClientViewers 的创建。NetworkIDs 是每个复制的代理实体，是唯一的，并在服务器和客户端之间复制的。ClientBubbles 与拥有客户端机器的父 UNetConnection 的播放器控制器有关。ClientViewers 与所有拥有父或子 UNetConnection 到单一客户端机器的播放器控制器有关（分屏等）。

## 图示

![](/uploads/projects/ue-bluprint/20221218-21381141.png)

## Inputs

## Outputs

返回值。大规模复制子系统对象参考。

<hr>

Get Mass Replication Subsystem (World Subsystem)

Manages the creation of NetworkIDs, ClientBubbles and ClientViewers.. NetworkIDs are per replicated Agent Entity and are unique and replicated between server and clients.. ClientBubbles relate to the player controller that owns the parent UNetConnection to a Client machine.. ClientViewers relate to all the player controllers that have a parent or child UNetConnection to a single Client machine (split screen etc).

## 图示

![](/uploads/projects/ue-bluprint/20221218-21381141.png)

## Inputs

## Outputs

Return Value: Mass Replication Subsystem Object Reference.
