# SetARWorldOriginLocationandRotat-

For a point P in the AR local space, whose location and rotation are "OriginLocation" and "OriginRotation" in the world space. modify the alignment transform so that the same point P will be transformed to the origin in the world space.. @bIsTransformInWorldSpace: whether "OriginLocation" and "OriginRotation" are specified in UE4's world space or AR system's local space.. @bMaintainUpDirection: if set, only the yaw roation of the alignment transform will be modified, pitch and roll will be zeroed out.

Target is ARBlueprint Library

## 图示

![]($-20221218-17560611.png)

## Inputs

In: Exec.

Origin Location: Vector.

Origin Rotation: Rotator.

Is Transform in World Space: Boolean.

Maintain Up Direction: Boolean.  

## Outputs

Out: Exec.

