# GetDisplayClusterWorldSubsystem

Get Display Cluster World Subsystem (World Subsystem)

World Subsystem used to react to level and world changes.. When Concert reloads the packages, streamed levels are removed and re-added without invoiking LoadMap which. circumvents FDisplayClusterGameManager::StartScene method invoked inside LoadMap method of DisplayClusterGameEngine.. This causes issues such as not updating references to DisplayClusterRootActor which causes memory corruption, crashes. and graphic corruption. This Subsystem is used to react to changes in number of levels used in the current world. and forces DisplayClusterModule to refresh all of its managers.

## 图示

![]($-20221218-21374987.png)

## Inputs

## Outputs

Return Value: Display Cluster World Subsystem Object Reference.

