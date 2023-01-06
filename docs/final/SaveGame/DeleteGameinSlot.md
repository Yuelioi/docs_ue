# DeleteGameinSlot

删除某个特定插槽中的保存游戏。

目标是游戏性的统计学

## 图示

![]($-20221218-20470259.png)

## Inputs

在。执行。

槽位名称。字符串。要删除的保存游戏槽的名称。

用户索引。整数。对于某些平台，主用户索引用于识别进行删除的用户。  

## Outputs

出：执行。

返回值。布尔值。如果一个文件确实能够被删除，则为真。使用DoesSaveGameExist来区分删除失败和文件不存在导致的失败。

Delete a save game in a particular slot.

Target is Gameplay Statics

## 图示

![]($-20221218-20470259.png)

## Inputs

In: Exec.

Slot Name: String. Name of save game slot to delete..

User Index: Integer. For some platforms, master user index to identify the user doing the deletion..  

## Outputs

Out: Exec.

Return Value: Boolean. True if a file was actually able to be deleted. use DoesSaveGameExist to distinguish between delete failures and failure due to file not existing..

