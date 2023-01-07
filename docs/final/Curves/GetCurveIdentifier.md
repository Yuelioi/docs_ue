# GetCurveIdentifier

构建一个有效的 FAnimationCurveIdentifier 实例。确保所提供的曲线类型的骨架上存在基本的 SmartName。如果最初没有找到它，它将把它添加到骨架上，从而修改它。

目标是 Animation Curve Identifier 扩展

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340537.png)

## Inputs

在。执行。

在骨架中。骨架对象参考。寻找或添加曲线名称的骨架。

名称。名称。要寻找或添加的曲线的名称。

曲线类型。ERawCurveTrackTypes 枚举。要查找或添加的曲线的类型。

## Outputs

输出。执行。

返回值。Animation Curve Identifier 结构。如果操作成功，是有效的 FAnimationCurveIdentifier。

<hr>

Constructs a valid FAnimationCurveIdentifier instance. Ensuring that the underlying SmartName exists on the provided Skeleton for the provided curve type.. If it is not found initially it will add it to the Skeleton thus modifying it.

Target is Animation Curve Identifier Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340537.png)

## Inputs

In: Exec.

In Skeleton: Skeleton Object Reference. Skeleton on which to look for or add the curve name.

Name: Name. Name of the curve to find or add.

Curve Type: ERawCurveTrackTypes Enum. Type of the curve to find or add.

## Outputs

Out: Exec.

Return Value: Animation Curve Identifier Structure. Valid FAnimationCurveIdentifier if the operation was successful.
