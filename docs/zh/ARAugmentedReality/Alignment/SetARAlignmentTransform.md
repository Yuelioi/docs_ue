# SetARAlignmentTransform

设置一个将被应用于跟踪空间的变换。这可以有效地移动增强现实系统所拥有的任何摄像机，使其在虚幻的世界空间中指向一个不同的位置。这通常是为了支持依赖于静态、几何和/或照明的AR场景。

注意：任何被钉住的可移动的组件看起来都会留在原地，而任何没有被钉住的或不可移动的(静态或静止的)组件看起来都会移动。

\参见PinComponent。\参见PinComponentToTraceResult

目标是ARBlueprint库

## 图示

![]($-20221218-17560502.png)

## Inputs

在。执行。

In Alignment Transform: Transform（通过引用）。 

## Outputs

输出。Exec.
