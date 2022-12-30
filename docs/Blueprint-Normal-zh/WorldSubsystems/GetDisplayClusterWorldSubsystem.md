# GetDisplayClusterWorldSubsystem

获取显示集群世界子系统（世界子系统）。

世界子系统用于对关卡和世界的变化做出反应。当Concert重新加载软件包时，流式关卡被移除并重新添加，而没有调用LoadMap，这规避了在DisplayClusterGameEngine的LoadMap方法中调用的FDisplayClusterGameManager::StartScene方法。这导致了一些问题，如不更新对DisplayClusterRootActor的引用，导致内存损坏、崩溃和图形损坏。该子系统用于对当前世界中使用的关卡数量的变化做出反应，并迫使DisplayClusterModule刷新其所有的管理器。

## 图示

![]($-20221218-21374987.png)

## Inputs

## Outputs

返回值。显示群集世界子系统对象参考。
