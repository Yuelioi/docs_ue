# GetKeyFrameIndexatTime

Returns the keyframe index that covers the specified time (in seconds), or INDEX_NONE if none exists.. When bClampToEnds is true, it will choose the first or last keyframe if the time is out of range.

Target is Paper Flipbook

## 图示

![]($-20221218-21021761.png)

## Inputs

Target: Paper Flipbook Object Reference.

Time: Float (single-precision).

Clamp to Ends: Boolean.  

## Outputs

Return Value: Integer. Returns the keyframe index that covers the specified time (in seconds), or INDEX_NONE if none exists.. When bClampToEnds is true, it will choose the first or last keyframe if the time is out of range..

