# GetTransformChildCurveIdentifier

转换一个有效的 FAnimationCurveIdentifier 实例的 RCT_Transform 曲线类型为目标子曲线。

目标是动画曲线标识符扩展

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340768.png)

## Inputs

在。执行。

In Out Identifier。Animation Curve Identifier 结构（通过引用）。[Out] 要转换的标识符。

通道。ETransformCurveChannel 枚举。目标通道。

Axis: EVectorCurveChannel Enum. 到目标的通道内的轴。

## Outputs

输出。执行：执行。

返回值。布尔值。如果操作成功，是有效的 FAnimationCurveIdentifier。

<hr>

Converts a valid FAnimationCurveIdentifier instance with RCT_Transform curve type to target a child curve.

Target is Animation Curve Identifier Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340768.png)

## Inputs

In: Exec.

In Out Identifier: Animation Curve Identifier Structure (by ref). [out] Identifier to be converted.

Channel: ETransformCurveChannel Enum. Channel to target.

Axis: EVectorCurveChannel Enum. Axis within channel to target.

## Outputs

Out: Exec.

Return Value: Boolean. Valid FAnimationCurveIdentifier if the operation was successful.
