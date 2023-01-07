# SaveGametoSlot

将 SaveGameObject 的内容保存到一个特定平台的保存槽/文件中。注意：这将写出所有的非瞬时属性，SaveGame 属性标志不被检查。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-20470619.png)

## Inputs

在。执行。

保存游戏对象。保存游戏对象参考。包含我们想写出来的保存游戏的数据的对象。

插槽名称。字符串。要保存的游戏槽的名称。

用户索引。整数。对于某些平台，主用户索引用于识别进行保存的用户。

## Outputs

出：执行。

返回值。布尔值。我们是否成功保存了该信息。

<hr>

Save the contents of the SaveGameObject to a platform-specific save slot/file.. Note: This will write out all non-transient properties, the SaveGame property flag is not checked

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-20470619.png)

## Inputs

In: Exec.

Save Game Object: Save Game Object Reference. Object that contains data about the save game that we want to write out.

Slot Name: String. Name of save game slot to save to..

User Index: Integer. For some platforms, master user index to identify the user doing the saving..

## Outputs

Out: Exec.

Return Value: Boolean. Whether we successfully saved this information.
