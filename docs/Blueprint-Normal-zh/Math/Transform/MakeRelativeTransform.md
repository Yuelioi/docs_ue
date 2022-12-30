# MakeRelativeTransform

计算一个变换与另一个变换的相对变换。

例子。ChildOffset = MakeRelativeTransform(Child.GetActorTransform(), Parent.GetActorTransform())。这将计算出子体与父体的相对变换。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19554164.png)

## Inputs

A: 变换（通过引用）。对象的变换。

相对于。变换（通过引用）。结果相对于的变换（与A在同一空间）。  

## Outputs

返回值。变换。新的相对变换。
