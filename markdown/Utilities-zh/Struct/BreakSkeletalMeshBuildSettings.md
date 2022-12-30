# BreakSkeletalMeshBuildSettings

添加一个打破'SkeletalMeshBuildSettings'的节点到其成员字段中

## 图示

![]($-20221218-14423956.png)

## Inputs

骨架网构建设置。骨架网构建设置结构（按参考）。  

## Outputs

重新计算法线。Boolean.重新计算法线：。如果为true，原始网格的法线会被忽略并重新计算。

重新计算切线。布尔型。重新计算切线：。如果为true，原始网格的切线会被忽略并重新计算。

使用Mikk TSpace。Boolean.使用Mikk TSpace:。如果为真，退化的三角形将被删除。

计算加权法线。布尔型。计算加权法线：.如果为真，在计算法线时，我们将使用三角形的表面积和转角作为比率。

删除退化者。布尔型。删除退行者：。如果为真，退行的三角形将被移除。

使用高精度切线基数。Boolean.使用高精度正切基线：。如果为真，切线将以16位与8位精度存储。

使用全精度UV。布尔值。使用全精度UVs：。如果为真，UVs将以全浮点精度存储。

使用向后兼容的F16Trunc UVs。Boolean.使用向后兼容的F16Trunc UVs：。如果为真，UVs将使用向后兼容的F16转换，对传统网格进行截断。

阈值位置。Float（单精度）。阈值位置：。阈值用于决定两个顶点的位置是否相等。

阈值正切法线。Float（单精度）。阈值正切法线：。用于决定两个法线、切线或双法线是否相等的阈值。

阈值UV：浮点数（单精度）。Threshold UV:.用来决定两个UV是否相等的阈值。

Morph Threshold Position:Float（单精度）。Morph Threshold Position：.计算变形目标延迟时比较顶点位置是否相同的阈值。
