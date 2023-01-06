# FindRelativeLookatRotation

为一个具有StartTransform的物体寻找局部旋转（范围为[-180, 180]），使其指向TargetLocation。对于获取LookAt Azimuth或Pawn Aim Offset很有用。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19542574.png)

## Inputs

开始转化。转变（通过参考）。

目标位置。向量（通过参考）。  

## Outputs

返回值。旋转器。为一个带有StartTransform的物体找到一个局部旋转（范围为[-180, 180]），使其指向TargetLocation。对于获取LookAt方位角或小兵瞄准偏移很有用。

Find a local rotation (range of [-180, 180]) for an object with StartTransform to point at TargetLocation.. Useful for getting LookAt Azimuth or Pawn Aim Offset.

Target is Kismet Math Library

## 图示

![]($-20221218-19542574.png)

## Inputs

Start Transform: Transform (by ref).

Target Location: Vector (by ref).  

## Outputs

Return Value: Rotator. Find a local rotation (range of [-180, 180]) for an object with StartTransform to point at TargetLocation.. Useful for getting LookAt Azimuth or Pawn Aim Offset..

