# MakeAbcGeometryCacheSettings

添加一个节点，从其成员中创建一个'AbcGeometryCacheSettings'。

## 图示

![]($-20221218-14461192.png)

## Inputs

扁平化轨迹。Boolean.Flatten Tracks:（扁平化轨迹）。是否将所有顶点动画合并为一个轨迹。

存储导入的顶点号码。布尔型。存储导入的顶点编号：。存储导入的顶点号码。这可以让你知道DCC里面的顶点号码。对于一个立方体来说，每个顶点号码的数值范围是0到7。即使位置的数量可能是24。

应用恒定拓扑结构优化。布尔型。应用恒定拓扑优化：。强制预处理程序只做一次优化，而不是由预处理程序决定。这可能会导致某些网格出现一些问题，但可以确保运动。 如果拓扑结构是恒定的，模糊总是有效。

运动矢量。EAbcGeometryCacheMotionVectorsImport Enum.运动矢量。

优化索引缓冲区。布尔型。优化索引缓冲区：。为每个独特的帧优化索引缓冲区，以便在GPU上实现更好的缓存一致性。这是一个非常昂贵和耗时的过程，建议使用OFF...

压缩的位置精度。Float（单精度）。压缩位置精度：。用于压缩顶点位置的精度（更低=更好的结果，但压缩量更小，更高=更多的有损压缩，但尺寸更小）。

压缩纹理坐标的位数。整数。Compressed Texture Coordinates Number Of Bits（压缩纹理坐标位数）：。用于压缩纹理坐标的比特精度（高=效果好但压缩量小，低=有损压缩量大但体积小）。  

## Outputs

Abc Geometry Cache设置。Abc Geometry Cache Settings 结构。
