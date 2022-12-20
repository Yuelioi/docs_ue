# CopyAnimationCurveNamestoSkeleto-

Ensures that any curve names that do not exist on the NewSkeleton are added to it, in which case the SmartName on the actual curve itself will also be updated

Target is Animation Blueprint Library

## 图示

![]($-20221218-17514631.png)

## Inputs

In: Exec.

Old Skeleton: Skeleton Object Reference.

New Skeleton: Skeleton Object Reference.

Sequence Base: Anim Sequence Base Object Reference.

Curve Type: ERawCurveTrackTypes Enum.  

## Outputs

Out: Exec.

