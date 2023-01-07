# AsyncSaveGametoSlot

安排一个异步保存到一个特定的槽。UGameplayStatics::AsyncSaveGameToSlot 是这个的本地版本。当保存成功或失败时，完成的引脚会被激活，并显示成功/失败和保存游戏对象。请记住，有些平台可能不支持同时尝试加载和保存。

目标是异步行动处理保存游戏

## 图示

![](/uploads/projects/ue-bluprint/20221218-20470021.png)

## Inputs

在。执行。

保存游戏对象。保存游戏对象参考。包含我们想写出来的保存游戏的数据的对象。

槽位名称。字符串。要加载的保存游戏槽的名称。

用户索引。整数。对于某些平台，主用户索引用于识别正在进行装载的用户。

## Outputs

出：执行。

已完成。执行。已完成:。当保存/加载完成时调用的代表。

保存游戏。保存游戏对象参考。

成功。布尔值。

<hr>

Schedule an async save to a specific slot. UGameplayStatics::AsyncSaveGameToSlot is the native version of this.. When the save has succeeded or failed, the completed pin is activated with success/failure and the save game object.. Keep in mind that some platforms may not support trying to load and save at the same time.

Target is Async Action Handle Save Game

## 图示

![](/uploads/projects/ue-bluprint/20221218-20470021.png)

## Inputs

In: Exec.

Save Game Object: Save Game Object Reference. Object that contains data about the save game that we want to write out..

Slot Name: String. Name of the save game slot to load from..

User Index: Integer. For some platforms, master user index to identify the user doing the loading..

## Outputs

Out: Exec.

Completed: Exec. Completed:. Delegate called when the save/load completes.

Save Game: Save Game Object Reference.

Success: Boolean.
