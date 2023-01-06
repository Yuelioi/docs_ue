# GetDisplayClusterWorldSubsystem

获取显示集群世界子系统（世界子系统）。

世界子系统用于对关卡和世界的变化做出反应。当Concert重新加载软件包时，流式关卡被移除并重新添加，而没有调用LoadMap，这规避了在DisplayClusterGameEngine的LoadMap方法中调用的FDisplayClusterGameManager::StartScene方法。这导致了一些问题，如不更新对DisplayClusterRootActor的引用，导致内存损坏、崩溃和图形损坏。该子系统用于对当前世界中使用的关卡数量的变化做出反应，并迫使DisplayClusterModule刷新其所有的管理器。

## 图示

![]($-20221218-21374987.png)

## Inputs

## Outputs

返回值。显示群集世界子系统对象参考。

Get Display Cluster World Subsystem (World Subsystem)

World Subsystem used to react to level and world changes.. When Concert reloads the packages, streamed levels are removed and re-added without invoiking LoadMap which. circumvents FDisplayClusterGameManager::StartScene method invoked inside LoadMap method of DisplayClusterGameEngine.. This causes issues such as not updating references to DisplayClusterRootActor which causes memory corruption, crashes. and graphic corruption. This Subsystem is used to react to changes in number of levels used in the current world. and forces DisplayClusterModule to refresh all of its managers.

## 图示

![]($-20221218-21374987.png)

## Inputs

## Outputs

Return Value: Display Cluster World Subsystem Object Reference.

