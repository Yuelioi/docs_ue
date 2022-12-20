# FindCurveIdentifier

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

