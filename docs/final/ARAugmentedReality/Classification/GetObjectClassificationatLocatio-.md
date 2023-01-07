# GetObjectClassificationatLocatio-

尝试在世界空间位置确定物体的分类。@InWorldLocation：需要进行分类的世界位置。@OutClassification：分类结果。@OutClassificationLocation：计算分类的世界位置。@MaxLocationDiff：指定世界位置和分类位置之间的最大距离。

目标是 ARMesh 几何图形

## 图示

![](/uploads/projects/ue-bluprint/20221218-17562329.png)

## Inputs

在。执行：执行。

目标。ARMesh Geometry 对象参考。

在世界位置。矢量（通过参考）。

最大位置差。Float（单精度）。

## Outputs

输出。执行：执行。

输出分类。EARObjectClassification 枚举。

Out Classification Location: 向量。

返回值。Boolean.：是否计算出了有效的分类结果。

<hr>

Try to determine the classification of the object at a world space location. @InWorldLocation: the world location where the classification is needed. @OutClassification: the classification result. @OutClassificationLocation: the world location at where the classification is calculated. @MaxLocationDiff: the max distance between the specified world location and the classification location

Target is ARMesh Geometry

## 图示

![](/uploads/projects/ue-bluprint/20221218-17562329.png)

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
