# SetARWorldOriginLocationandRotat-

对于AR局部空间中的一个点P，其位置和旋转是世界空间中的 "OriginLocation "和 "OriginRotation"。 修改对齐变换，使同一个点P将被变换到世界空间的原点。@bIsTransformInWorldSpace："OriginLocation "和 "OriginRotation "是在UE4的世界空间还是AR系统的本地空间指定的。@bMaintainUpDirection：如果设置，只有对齐变换的yaw roation会被修改，pitch和roll会被清零。

目标是ARBlueprint库

## 图示

![]($-20221218-17560611.png)

## Inputs

在。执行。

原点位置。矢量。

原点旋转。旋转器。

Is Transform in World Space: Boolean（布尔）。

保持向上的方向。Boolean（布尔）。 

## Outputs

输出。执行。
