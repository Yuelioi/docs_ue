# GetKeyFrameIndexatTime

返回覆盖指定时间的关键帧索引（以秒为单位），如果不存在，则返回 INDEX_NONE。当 bClampToEnds 为真时，如果时间超出范围，它将选择第一个或最后一个关键帧。

目标是纸质翻页书

## 图示

![](/uploads/projects/ue-bluprint/20221218-21021761.png)

## Inputs

目标。纸质翻页书对象参考。

时间。浮点数（单精度）。

钳制到末端：布尔值。

## Outputs

返回值。整数。返回覆盖指定时间（秒）的关键帧索引，如果不存在，则返回 INDEX_NONE。当 bClampToEnds 为真时，如果时间超出范围，它将选择第一个或最后一个关键帧。

<hr>

Returns the keyframe index that covers the specified time (in seconds), or INDEX_NONE if none exists.. When bClampToEnds is true, it will choose the first or last keyframe if the time is out of range.

Target is Paper Flipbook

## 图示

![](/uploads/projects/ue-bluprint/20221218-21021761.png)

## Inputs

Target: Paper Flipbook Object Reference.

Time: Float (single-precision).

Clamp to Ends: Boolean.

## Outputs

Return Value: Integer. Returns the keyframe index that covers the specified time (in seconds), or INDEX_NONE if none exists.. When bClampToEnds is true, it will choose the first or last keyframe if the time is out of range..
