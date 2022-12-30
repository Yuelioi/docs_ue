# BreakAbcCompressionSettings

添加一个节点，将'AbcCompressionSettings'分解成其成员字段

## 图示

![]($-20221218-14303115.png)

## Inputs

Abc压缩设置。Abc压缩设置结构（通过引用）。 

## Outputs

合并网格。布尔值。Merge Meshes（合并网格）：。为了压缩目的，是否应该合并各个网格。

Bake Matrix Animation（烘焙矩阵动画）。布尔值。Bake Matrix Animation（烘焙矩阵动画）。是否应将纯矩阵动画作为顶点动画烘烤出来（或跳过？）

Base Calculation Type（基础计算类型）。EBaseCalculationType枚举。基数计算类型：。决定如何计算最终存储为变形目标的基数。

占总基数的百分比。Float（单精度）。总基数的百分比：。将生成给定百分比的碱基作为形态目标。

基地的最大数量。整数。最大基数：。将生成固定数量的基点作为变形目标。

最小顶点数影响百分比。浮点数（单精度）。顶点影响的最小数量百分比：。影响顶点的最小百分比，要求变形目标有效。
