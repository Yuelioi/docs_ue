# GetDataRegistryItemFromLookup_ex-

试图在异步获取后获得存储在 DataRegistry 缓存中的结构数据，如果该项目可用，则修改 OutItem

目标是数据注册表子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362425.png)

## Inputs

在。执行。

项目标识。数据注册中心 Id 结构。要在缓存中查找的项目标识。

解决的查询。数据注册表查询结构（通过引用）。由获取函数返回的已解决的标识符。

## Outputs

输出。执行：执行。

输出项目。通配符。这必须与注册表的类型相同，如果项目被找到，这将被填入找到的数据。

返回值。布尔值。如果项目被找到并且 OutItem 被修改，返回 true。

<hr>

Attempts to get structure data stored in a DataRegistry cache after an async acquire, modifying OutItem if the item is available

Target is Data Registry Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362425.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Resolved Lookup: Data Registry Lookup Structure (by ref). Resolved identifier returned by acquire function.

## Outputs

Out: Exec.

Out Item: Wildcard. This must be the same type as the registry, if the item is found this will be filled in with the found data.

Return Value: Boolean. Returns true if the item was found and OutItem was modified.
