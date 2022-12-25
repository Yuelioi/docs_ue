# CompactMaterialIDs

压缩TargetMesh的MaterialIDs，即移除任何未使用的MaterialIDs，并重新映射剩余的。N个使用中的MaterialIDs到[0,N-1]的范围。可以选择计算一个压缩的材料列表。

目标是几何脚本库网格材料功能

## 图示

![]($-20221218-19111561.png)

## Inputs

在。执行。

目标网格。动态网格对象参考。

源材料列表。材料接口对象的引用数组。输入材料列表，假设SourceMaterialList.Num() ==输入时MaterialIDs的数量。

调试。Geometry Script Debug Object Reference.  

## Outputs

出：执行。

压缩的材料列表。材料界面对象引用数组。新的压缩材料列表，与新的压缩材料ID一一对应。

目标网格。动态网格对象参考。
