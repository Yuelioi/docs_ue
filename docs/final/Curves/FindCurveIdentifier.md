# FindCurveIdentifier

尝试构建一个有效的FAnimationCurveIdentifier实例。它试图在所提供的骨架上找到所提供的曲线类型的基础SmartName。

目标是Animation Curve Identifier扩展。

## 图示

![]($-20221218-18340415.png)

## Inputs

在。执行。

在骨架中。骨架对象参考。骨架上要找的曲线名称。

名称。名称。要寻找的曲线的名称。

曲线类型。ERawCurveTrackTypes枚举。要查找的曲线的类型。 

## Outputs

输出。执行。

返回值。Animation Curve Identifier结构。如果该名称存在于骨架上且操作成功，则为有效的FAnimationCurveIdentifier，否则无效。

Tries to construct a valid FAnimationCurveIdentifier instance. It tries to find the underlying SmartName on the provided Skeleton for the provided curve type.

Target is Animation Curve Identifier Extensions

## 图示

![]($-20221218-18340415.png)

## Inputs

In: Exec.

In Skeleton: Skeleton Object Reference. Skeleton on which to look for the curve name.

Name: Name. Name of the curve to find.

Curve Type: ERawCurveTrackTypes Enum. Type of the curve to find.  

## Outputs

Out: Exec.

Return Value: Animation Curve Identifier Structure. Valid FAnimationCurveIdentifier if the name exists on the skeleton and the operation was successful, invalid otherwise.

