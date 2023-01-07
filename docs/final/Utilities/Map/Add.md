# Add

向地图添加一个键和值。如果有东西已经使用了所提供的 key，它将被新的值所覆盖。调用后，Key 会被保证与 Value 相关联，直到地图的后续突变。

目标是蓝图地图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14265348.png)

## Inputs

在。执行。

目标地图。通配符到通配符的地图。要添加键和值的地图。

键。通配符（通过引用）。将用于查找值的键。

值。通配符（通过引用）。以后要检索的值。

## Outputs

输出。执行。

<hr>

Adds a key and value to the map. If something already uses the provided key it will be overwritten with the new value.. After calling Key is guaranteed to be associated with Value until a subsequent mutation of the Map.

Target is Blueprint Map Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14265348.png)

## Inputs

In: Exec.

Target Map: Map of Wildcards to Wildcards. The map to add the key and value to.

Key: Wildcard (by ref). The key that will be used to look the value up.

Value: Wildcard (by ref). The value to be retrieved later.

## Outputs

Out: Exec.
