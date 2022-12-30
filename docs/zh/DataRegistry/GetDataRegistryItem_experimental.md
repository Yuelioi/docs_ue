# GetDataRegistryItem_experimental

试图获取存储在DataRegistry中的缓存结构数据，如果该项目可用，则修改OutItem。(实验性的)这个版本有一个输入参数和简单的bool返回。

目标是数据注册表子系统

## 图示

![]($-20221218-18362549.png)

## Inputs

在。执行。

项目标识。数据注册中心Id结构。要在缓存中查找的项目标识。

Out 项目。通配符（通过ref）。这必须与注册表的类型相同，如果项目被找到，这将被填入找到的数据。 

## Outputs

输出。执行：执行。

返回值。布尔值。如果项目被找到并且OutItem被修改，返回true。
