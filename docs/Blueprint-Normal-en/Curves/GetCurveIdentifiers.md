# GetCurveIdentifiers

Retrieves all curve identifiers for a specific curve types from the provided Skeleton

Target is Animation Curve Identifier Extensions

## 图示

![]($-20221218-18340649.png)

## Inputs

In: Exec.

In Skeleton: Skeleton Object Reference. Skeleton from which to retrieve the curve identifiers.

Curve Type: ERawCurveTrackTypes Enum. Type of the curve identifers to retrieve.  

## Outputs

Out: Exec.

Return Value: Array of Animation Curve Identifier Structures. Array of FAnimationCurveIdentifier instances each representing a unique curve if the operation was successful, empyty array otherwise.

