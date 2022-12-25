# GetNormalizedAttributeValue

从Fixture补丁函数中返回一个Int值的标准化值。

目标是DMXSubsystem

## 图示

![]($-20221218-18442556.png)

## Inputs

目标。DMXSubsystem对象参考。

在灯具补丁中。DMX灯具补丁对象参考。

在函数属性中。DMXAttribute Name结构。

在值。整数。  

## Outputs

返回值。Float（单精度）。使用该函数的信号格式，传递的Int的标准化值。如果在Fixture补丁中没有找到该函数，则为-1.0。
