# MakeRelativeTransform

Computes a relative transform of one transform compared to another.

Example: ChildOffset = MakeRelativeTransform(Child.GetActorTransform(), Parent.GetActorTransform()). This computes the relative transform of the Child from the Parent.

Target is Kismet Math Library

## 图示

![]($-20221218-19554164.png)

## Inputs

A: Transform (by ref). The object's transform.

Relative To: Transform (by ref). The transform the result is relative to (in the same space as A).  

## Outputs

Return Value: Transform. The new relative transform.

