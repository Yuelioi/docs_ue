# BreakComposureUVMapSettings

添加一个节点，将'ComposureUVMapSettings'分解成其成员字段

## 图示

![]($-20221218-14324900.png)

## Inputs

Composure UVMap Settings。Composure UVMap设置结构（通过引用）。 

## Outputs

Pre UVDisplacement Matrix: 矩阵结构。Pre UVDisplacement Matrix:预置换矩阵。取样前应用的UV矩阵 DisplacementTexture.

Post UVDisplacement Matrix（后UVD置换矩阵）。矩阵结构。Post UVDisplacement Matrix:（后UVD置换矩阵）。使用DisplacementTexture置换UV后应用的UV矩阵。

Displacement Decode Parameters（位移解码参数）。矢量2D结构。Displacement Decode Parameters:（位移解码参数）。DisplacementTexture的解码参数。DeltaUV = ((RedChannel, GreenChannel) - Y) * X.

位移纹理。纹理对象参考。Displacement Texture:.位移纹理。使用的置换纹理。

Use Displacement Blue And Alpha Channels: Boolean（布尔）。使用置换蓝色和阿尔法通道：。在计算DeltaUV时是否使用蓝色和Alpha通道而不是红色和绿色通道。
