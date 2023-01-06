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

Returns the sprite at the specified time (in seconds), or nullptr if none exists.. When bClampToEnds is true, it will choose the first or last sprite if the time is out of range.

Target is Paper Flipbook

## 图示

![]($-20221218-21022566.png)

## Inputs

Target: Paper Flipbook Object Reference.

Time: Float (single-precision).

Clamp to Ends: Boolean.  

## Outputs

Return Value: Paper Sprite Object Reference. Returns the sprite at the specified time (in seconds), or nullptr if none exists.. When bClampToEnds is true, it will choose the first or last sprite if the time is out of range..

