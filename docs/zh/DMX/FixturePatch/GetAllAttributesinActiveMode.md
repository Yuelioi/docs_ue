# GetAllAttributesinActiveMode

返回当前活动模式的有效属性数组。活动模式的通道跨度范围之外的属性被忽略。

目标是DMX灯具补丁

## 图示

![]($-20221218-18433092.png)

## Inputs

目标。DMX灯具补丁对象参考。

## Outputs

返回值。DMXAttribute Name结构的数组。返回当前活动模式的有效属性数组。忽略活动模式的通道跨度范围之外的属性。