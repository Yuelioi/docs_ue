# MakeAbcCompressionSettings

添加一个节点，从其成员中创建一个'AbcCompressionSettings'。

## 图示

![]($-20221218-14461016.png)

## Inputs

合并网格。Boolean.Merge Meshes（合并网格）：。为了压缩目的，是否应该合并各个网格。

烘烤矩阵动画。Boolean.Bake Matrix Animation（烘焙矩阵动画）：。是否应将纯矩阵动画作为顶点动画烘焙出来（或跳过？）

基础计算类型。EBaseCalculationType枚举。基数计算类型：。决定如何计算作为变形目标储存的最终碱基数量。

总基数的百分比。浮点数（单精度）。总基数的百分比：.将生成给定百分比的基地作为变形目标。

最大基数。整数。最大基数：。将生成固定数量的碱基作为变形目标。

影响顶点的最小数量百分比。Float (single-precision).顶点影响的最小数量百分比：。影响顶点的最小百分比，要求变形目标有效。  

## Outputs

Abc压缩设置。Abc压缩设置结构。
