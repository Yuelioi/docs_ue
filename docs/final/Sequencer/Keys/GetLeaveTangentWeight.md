# GetLeaveTangentWeight

如果切线权重模式为 RCTWM_WeightedLeave 或 RCTWM_WeightedBoth，则为右侧离开切线的权重。

目标是电影场景脚本的浮动键

## 图示

![](/uploads/projects/ue-bluprint/20221218-20492202.png)

## Inputs

目标。电影场景脚本的浮动键对象参考。

## Outputs

返回值。浮点数（单精度）。切线重量。以 "sqrt(x*x+y*y) "的形式表示斜边的长度，使用与切线相同的 x 和 y 的定义。

<hr>

If Tangent Weight Mode is RCTWM_WeightedLeave or RCTWM_WeightedBoth, the weight of the leaving tangent on the right side.

Target is Movie Scene Scripting Float Key

## 图示

![](/uploads/projects/ue-bluprint/20221218-20492202.png)

## Inputs

Target: Movie Scene Scripting Float Key Object Reference.

## Outputs

Return Value: Float (single-precision). Tangent Weight. Represents the length of the hypotenuse in the form of "sqrt(x*x+y*y)" using the same definitions for x and y as tangents..
