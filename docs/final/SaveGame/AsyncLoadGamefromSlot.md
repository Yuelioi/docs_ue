# AsyncLoadGamefromSlot

安排一个特定槽的异步加载。UGameplayStatics::AsyncLoadGameFromSlot 是这个的本地版本。当加载成功或失败时，完成的引脚会被激活，并显示成功/失败和新加载的保存游戏对象（如果有效）。请记住，有些平台可能不支持同时尝试加载和保存。

目标是异步行动处理保存游戏

## 图示

![](/uploads/projects/ue-bluprint/20221218-20465898.png)

## Inputs

在。执行。

槽位名称。字符串。要加载的保存游戏槽的名称。

用户索引。整数。对于某些平台，主用户索引用于识别正在进行装载的用户。

## Outputs

出：执行。

已完成。执行。已完成:。当保存/加载完成时调用的代表。

保存游戏。保存游戏对象参考。

成功。布尔值。

<hr>

Schedule an async load of a specific slot. UGameplayStatics::AsyncLoadGameFromSlot is the native version of this.. When the load has succeeded or failed, the completed pin is activated with success/failure and the newly loaded save game object if valid.. Keep in mind that some platforms may not support trying to load and save at the same time.

Target is Async Action Handle Save Game

## 图示

![](/uploads/projects/ue-bluprint/20221218-20465898.png)

## Inputs

In: Exec.

Slot Name: String. Name of the save game slot to load from..

User Index: Integer. For some platforms, master user index to identify the user doing the loading..

## Outputs

Out: Exec.

Completed: Exec. Completed:. Delegate called when the save/load completes.

Save Game: Save Game Object Reference.

Success: Boolean.
