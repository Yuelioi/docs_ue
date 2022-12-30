# GetObjectClassificationatLocatio-

Try to determine the classification of the object at a world space location. @InWorldLocation: the world location where the classification is needed. @OutClassification: the classification result. @OutClassificationLocation: the world location at where the classification is calculated. @MaxLocationDiff: the max distance between the specified world location and the classification location

Target is ARMesh Geometry

## 图示

![]($-20221218-17562329.png)

## Inputs

In: Exec.

Target: ARMesh Geometry Object Reference.

In World Location: Vector (by ref).

Max Location Diff: Float (single-precision).  

## Outputs

Out: Exec.

Out Classification: EARObjectClassification Enum.

Out Classification Location: Vector.

Return Value: Boolean. : whether a valid classification result is calculated.

