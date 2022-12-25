# UpdateInstanceTransform

更新指定的实例的变换。除非设置了bWorldSpace，否则实例将在这个组件的本地空间中给出。成功时返回真。

目标是纸上分组的精灵组件

## 图示

![]($-20221218-18273820.png)

## Inputs

在。执行。

目标。Paper Grouped Sprite Component对象参考。

实例索引。整数。

新实例变换。变换（通过引用）。

世界空间。Boolean（布尔）。

Mark Render State Dirty: Boolean（布尔）。

远距传输。布尔值  

## Outputs

出场。执行：执行。

返回值。布尔值。为指定的实例更新变换。除非设置了bWorldSpace，否则实例将在这个组件的本地空间中给出。成功时返回True。
