# GetSpriteatTime

返回指定时间的精灵（以秒为单位），如果不存在，则返回nullptr。当bClampToEnds为真时，如果时间超出范围，它将选择第一个或最后一个精灵。

目标是纸质翻页书

## 图示

![]($-20221218-21022566.png)

## Inputs

目标。纸质翻页书对象参考。

时间。浮点数（单精度）。

钳制到末端：布尔值。  

## Outputs

返回值。纸质精灵对象参考。返回指定时间的精灵（单位：秒），如果不存在，则返回nullptr。当bClampToEnds为真时，如果时间超出范围，它将选择第一个或最后一个精灵。
