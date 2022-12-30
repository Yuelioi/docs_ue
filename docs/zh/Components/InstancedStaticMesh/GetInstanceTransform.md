# GetInstanceTransform

获取指定实例的变换。除非设置了bWorldSpace，否则实例将以该组件的本地空间返回。成功时返回True。

目标是实例化的静态网格组件

## 图示

![]($-20221218-18244014.png)

## Inputs

目标：Instanced Static Mesh Component对象参考。

实例索引。整数。

世界空间。布尔值。 

## Outputs

Out Instance Transform: 变换。

返回值。布尔值。获取指定实例的变换。除非设置了bWorldSpace，否则实例将以这个组件的本地空间返回。成功时返回True。
