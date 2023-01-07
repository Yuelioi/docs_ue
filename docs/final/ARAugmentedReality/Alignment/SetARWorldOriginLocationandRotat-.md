# SetARWorldOriginLocationandRotat-

对于 AR 局部空间中的一个点 P，其位置和旋转是世界空间中的 "OriginLocation "和 "OriginRotation"。 修改对齐变换，使同一个点 P 将被变换到世界空间的原点。@bIsTransformInWorldSpace："OriginLocation "和 "OriginRotation "是在 UE4 的世界空间还是 AR 系统的本地空间指定的。@bMaintainUpDirection：如果设置，只有对齐变换的 yaw roation 会被修改，pitch 和 roll 会被清零。

目标是 ARBlueprint 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17560611.png)

## Inputs

在。执行。

原点位置。矢量。

原点旋转。旋转器。

Is Transform in World Space: Boolean（布尔）。

保持向上的方向。Boolean（布尔）。

## Outputs

输出。执行。

<hr>

For a point P in the AR local space, whose location and rotation are "OriginLocation" and "OriginRotation" in the world space. modify the alignment transform so that the same point P will be transformed to the origin in the world space.. @bIsTransformInWorldSpace: whether "OriginLocation" and "OriginRotation" are specified in UE4's world space or AR system's local space.. @bMaintainUpDirection: if set, only the yaw roation of the alignment transform will be modified, pitch and roll will be zeroed out.

Target is ARBlueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17560611.png)

## Inputs

In: Exec.

Origin Location: Vector.

Origin Rotation: Rotator.

Is Transform in World Space: Boolean.

Maintain Up Direction: Boolean.

## Outputs

Out: Exec.
