# FindDataRegistryItem_experimenta-

试图获取存储在 DataRegistry 中的缓存结构数据，如果该项目可用，则修改 OutItem。(试验性的)这个版本有一个输出参数和枚举结果

目标是数据注册表子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362312.png)

## Inputs

在。执行。

项目标识。数据注册处 Id 结构。要在缓存中查找的项目标识。

## Outputs

找到。执行。成功找到该行。

未找到。执行。未能找到该行。

淘汰项目。通配符。这必须与注册表的类型相同，如果项目被找到，这将被填入找到的数据。

<hr>

Attempts to get cached structure data stored in a DataRegistry, modifying OutItem if the item is available. (EXPERIMENTAL) this version has an output param and enum result

Target is Data Registry Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362312.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

## Outputs

Found: Exec. Found the row successfully..

Not Found: Exec. Failed to find the row..

Out Item: Wildcard. This must be the same type as the registry, if the item is found this will be filled in with the found data.
