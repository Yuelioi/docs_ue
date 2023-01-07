# RegenerateAllEntries

对列表中的所有条目进行完全再生。请注意，条目 UWidget 实例将不会被销毁，但它们将被释放并重新生成。换句话说，条目 widget 不会接收到 Destruct/Construct 事件。他们将接收 OnEntryReleased，IUserObjectListEntry 的实现将接收 OnListItemObjectSet。

目标是列表视图基础

## 图示

![](/uploads/projects/ue-bluprint/20221218-19443917.png)

## Inputs

在。执行。

目标。列表视图基本对象参考。

## Outputs

出：执行。

<hr>

Full regeneration of all entries in the list. Note that the entry UWidget instances will not be destroyed, but they will be released and re-generated.. In other words, entry widgets will not receive Destruct/Construct events. They will receive OnEntryReleased and IUserObjectListEntry implementations will receive OnListItemObjectSet.

Target is List View Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-19443917.png)

## Inputs

In: Exec.

Target: List View Base Object Reference.

## Outputs

Out: Exec.
