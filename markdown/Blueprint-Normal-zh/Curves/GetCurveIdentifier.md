# GetCurveIdentifier

构建一个有效的FAnimationCurveIdentifier实例。确保所提供的曲线类型的骨架上存在基本的SmartName。如果最初没有找到它，它将把它添加到骨架上，从而修改它。

目标是Animation Curve Identifier扩展

## 图示

![]($-20221218-18340537.png)

## Inputs

在。执行。

在骨架中。骨架对象参考。寻找或添加曲线名称的骨架。

名称。名称。要寻找或添加的曲线的名称。

曲线类型。ERawCurveTrackTypes枚举。要查找或添加的曲线的类型。 

## Outputs

输出。执行。

返回值。Animation Curve Identifier结构。如果操作成功，是有效的FAnimationCurveIdentifier。
