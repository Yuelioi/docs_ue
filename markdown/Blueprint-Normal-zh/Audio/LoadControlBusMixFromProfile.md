# LoadControlBusMixFromProfile

将控制总线混合从配置文件加载到UObject混合定义中，从ini文件中反序列化。

目标是音频调制静态

## 图示

![]($-20221218-18045669.png)

## Inputs

在。Exec.

混合。声音控制总线混合对象参考。

激活。布尔值。如果为真，在从配置文件加载时激活混音。

配置文件索引。整数。配置文件的索引，允许将多个配置文件加载到单个混合对象。如果<=0，则从默认配置文件加载（无后缀）。 

## Outputs

输出。执行：执行。

Stages（舞台）。声音控制总线混合阶段结构的阵列。Stages - 从配置文件加载的舞台值（如果配置文件不存在或没有序列化的值，则为空）。
