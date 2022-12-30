# MakeSourceEffectMotionFilterSett-

添加一个节点，从其成员中创建一个 "SourceEffectMotionFilterSettings"。

## 图示

![]($-20221218-15021338.png)

## Inputs

运动过滤器拓扑结构。ESourceEffectMotionFilterTopology Enum.运动滤波器拓扑结构：。在串行模式下，滤波器A先处理，再由滤波器B处理；在并行模式下，滤波器A和滤波器B将分别处理干输入，然后再混合在一起。

运动滤波器混合。Float（单精度）。运动滤波混合：。滤波器混合控制信号中每个滤波器的数量，其中-1.0f只输出滤波器A，0.0f是滤波器A和B之间的平衡，而1.0f只输出滤波器B，这种混合方式取决于Topology.

滤波器ASettings。源效果个别滤镜设置结构。滤波器ASettings:。滤波器A的初始设置。

滤波器BSettings。源效果个别滤镜设置结构。滤波器BSettings:。滤波器B的初始设置。

调制映射。ESourceEffectMotionFilterModDestination枚举与源效果运动滤波器调制设置结构的映射。调制映射：。调制映射。

干体积Db。Float（单精度）。Dry Volume Db:.干 volume pass-through，单位是dB。

## Outputs

源效果运动滤镜设置。源效果运动滤镜设置结构。
