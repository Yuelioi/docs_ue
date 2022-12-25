# RegenerateAllEntries

对列表中的所有条目进行完全再生。请注意，条目UWidget实例将不会被销毁，但它们将被释放并重新生成。换句话说，条目widget不会接收到Destruct/Construct事件。他们将接收OnEntryReleased，IUserObjectListEntry的实现将接收OnListItemObjectSet。

目标是列表视图基础

## 图示

![]($-20221218-19443917.png)

## Inputs

在。执行。

目标。列表视图基本对象参考。  

## Outputs

出：执行。
