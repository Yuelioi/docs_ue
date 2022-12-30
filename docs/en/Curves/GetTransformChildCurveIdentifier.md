# GetTransformChildCurveIdentifier

Converts a valid FAnimationCurveIdentifier instance with RCT_Transform curve type to target a child curve.

Target is Animation Curve Identifier Extensions

## 图示

![]($-20221218-18340768.png)

## Inputs

In: Exec.

In Out Identifier: Animation Curve Identifier Structure (by ref). [out] Identifier to be converted.

Channel: ETransformCurveChannel Enum. Channel to target.

Axis: EVectorCurveChannel Enum. Axis within channel to target.  

## Outputs

Out: Exec.

Return Value: Boolean. Valid FAnimationCurveIdentifier if the operation was successful.

