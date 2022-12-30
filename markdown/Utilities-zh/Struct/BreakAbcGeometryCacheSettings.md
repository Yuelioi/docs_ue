# BreakAbcGeometryCacheSettings

添加一个节点，将'AbcGeometryCacheSettings'分解到其成员字段中。

## 图示

![]($-20221218-14303291.png)

## Inputs

Abc Geometry Cache Settings。Abc Geometry Cache Settings结构（通过引用）。 

## Outputs

Flatten Tracks: Boolean（布尔）。Flatten Tracks:. 是否将所有顶点动画合并为一个轨迹。

存储导入的顶点数字。布尔值。存储导入的顶点编号：。存储导入的顶点编号。这可以让你知道DCC里面的顶点编号。对于一个立方体来说，每个顶点号码的数值范围是0到7。即使位置的数量可能是24。

应用恒定拓扑结构优化。布尔值。应用恒定拓扑优化：。强制预处理器只做一次优化，而不是由预处理器决定。这可能会导致某些网格出现一些问题，但可以确保运动。 如果拓扑结构是恒定的，模糊总是有效的。

运动矢量。EAbcGeometryCacheMotionVectorsImport Enum。运动矢量。

优化索引缓冲区。布尔值。优化索引缓冲区：。为每个独特的帧优化索引缓冲区，以便在GPU上实现更好的缓存一致性。这是一个非常昂贵和耗时的过程，建议使用OFF.EXE。

压缩位置精度。浮点数（单精度）。Compressed Position Precision（压缩位置精度）：。用于压缩顶点位置的精度（更低=更好的结果，但压缩率较低，更高=更多的有损压缩，但尺寸较小）。

Compressed Texture Coordinates Number Of Bits（压缩纹理坐标位数）。整数。Compressed Texture Coordinates Number Of Bits:（压缩纹理坐标位数）。用于压缩纹理坐标的比特精度（高=效果好但压缩量小，低=损失大但体积小）。
