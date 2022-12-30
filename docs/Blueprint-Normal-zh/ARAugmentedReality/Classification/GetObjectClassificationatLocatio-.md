# GetObjectClassificationatLocatio-

尝试在世界空间位置确定物体的分类。@InWorldLocation：需要进行分类的世界位置。@OutClassification：分类结果。@OutClassificationLocation：计算分类的世界位置。@MaxLocationDiff：指定世界位置和分类位置之间的最大距离。

目标是ARMesh几何图形

## 图示

![]($-20221218-17562329.png)

## Inputs

在。执行：执行。

目标。ARMesh Geometry对象参考。

在世界位置。矢量（通过参考）。

最大位置差。Float（单精度）。 

## Outputs

输出。执行：执行。

输出分类。EARObjectClassification枚举。

Out Classification Location: 向量。

返回值。Boolean.：是否计算出了有效的分类结果。
