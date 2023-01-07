# GetDataRegistryItem_experimental

试图获取存储在 DataRegistry 中的缓存结构数据，如果该项目可用，则修改 OutItem。(实验性的)这个版本有一个输入参数和简单的 bool 返回。

目标是数据注册表子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362549.png)

## Inputs

在。执行。

项目标识。数据注册中心 Id 结构。要在缓存中查找的项目标识。

Out 项目。通配符（通过 ref）。这必须与注册表的类型相同，如果项目被找到，这将被填入找到的数据。

## Outputs

输出。执行：执行。

返回值。布尔值。如果项目被找到并且 OutItem 被修改，返回 true。

<hr>

Attempts to get cached structure data stored in a DataRegistry, modifying OutItem if the item is available. (EXPERIMENTAL) this version has an input param and simple bool return

Target is Data Registry Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362549.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Out Item: Wildcard (by ref). This must be the same type as the registry, if the item is found this will be filled in with the found data.

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if the item was found and OutItem was modified.
