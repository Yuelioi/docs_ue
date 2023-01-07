# MakeRelativeTransform

计算一个变换与另一个变换的相对变换。

例子。ChildOffset = MakeRelativeTransform(Child.GetActorTransform(), Parent.GetActorTransform())。这将计算出子体与父体的相对变换。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19554164.png)

## Inputs

A: 变换（通过引用）。对象的变换。

相对于。变换（通过引用）。结果相对于的变换（与 A 在同一空间）。

## Outputs

返回值。变换。新的相对变换。

<hr>

Computes a relative transform of one transform compared to another.

Example: ChildOffset = MakeRelativeTransform(Child.GetActorTransform(), Parent.GetActorTransform()). This computes the relative transform of the Child from the Parent.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19554164.png)

## Inputs

A: Transform (by ref). The object's transform.

Relative To: Transform (by ref). The transform the result is relative to (in the same space as A).

## Outputs

Return Value: Transform. The new relative transform.
