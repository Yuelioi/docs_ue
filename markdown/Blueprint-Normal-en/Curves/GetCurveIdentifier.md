# GetCurveIdentifier

Constructs a valid FAnimationCurveIdentifier instance. Ensuring that the underlying SmartName exists on the provided Skeleton for the provided curve type.. If it is not found initially it will add it to the Skeleton thus modifying it.

Target is Animation Curve Identifier Extensions

## 图示

![]($-20221218-18340537.png)

## Inputs

In: Exec.

In Skeleton: Skeleton Object Reference. Skeleton on which to look for or add the curve name.

Name: Name. Name of the curve to find or add.

Curve Type: ERawCurveTrackTypes Enum. Type of the curve to find or add.  

## Outputs

Out: Exec.

Return Value: Animation Curve Identifier Structure. Valid FAnimationCurveIdentifier if the operation was successful.

