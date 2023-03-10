# MakeMeshBuildSettings

添加一个节点，由其成员创建一个 "MeshBuildSettings"。

## 图示

![]($-20221218-14573715.png)

## Inputs

使用Mikk TSpace。Boolean.使用Mikk TSpace:。如果为真，退化的三角形将被删除。

重新计算法线。布尔型。重新计算法线：。如果为true，原始网格的法线会被忽略并重新计算。

重新计算切线。布尔型。重新计算切线：。如果为true，原始网格的切线会被忽略并重新计算。

计算加权法线。布尔型。计算加权法线：.如果为真，在计算法线时，我们将使用三角形的表面积和转角作为比率。

删除退化者。布尔型。删除退行者：。如果为真，退行的三角形将被移除。

建立反转索引缓冲区。Boolean.建立反转索引缓冲区：。需要在镜像变换中优化网格。双倍索引缓冲区大小。

使用高精度切线基数。Boolean.使用高精度正切基线：。如果为真，切线将以16位与8位精度存储。

使用全精度UV。布尔值。使用全精度UVs：。如果为真，UVs将以全浮点精度存储。

使用向后兼容的F16Trunc UVs。Boolean.使用向后兼容的F16Trunc UVs：。如果为真，UVs将使用向后兼容的F16转换，对传统网格进行截断。

生成光照图UV。布尔值。生成光照图UV。

双面距离场的产生。布尔型。生成两面的距离场：。是否将每个被击中的三角形作为一个正面来生成距离场。启用后可以防止距离场因网格开放而被丢弃，但也会降低距离场的AO质量。

启用物理材料掩码：布尔值。支持面部重合。

最小光照图分辨率。整数。最小光照图分辨率。

源光图索引。整数。Src Lightmap Index.

目的地光图索引。整数。Dst Lightmap Index.

建设规模。矢量。Build Scale 3D：。构建网格时应用的局部比例。

距离场分辨率刻度。Float（单精度）。Distance Field Resolution Scale（距离场分辨率）：。分配距离场体积纹理时应用于网格的比例。默认的比例是1，假设网格在世界范围内是无比例放置的。

距离场替换网格。静态网格对象参考。距离场置换网格。

最大流明网卡。整数。最大流明网卡：。为这个网格生成的最大光照度网格卡。更多的网卡意味着表面会有更好的覆盖，但会增加运行时间的开销。设置为0，表示禁止为这个网格生成网卡。默认值为12。

## Outputs

网格构建设置。网格构建设置结构。
