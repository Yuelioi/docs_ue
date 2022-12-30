# MakeComposureUVMapSettings

添加一个节点，从其成员中创建一个 "ComposureUVMapSettings"。

## 图示

![]($-20221218-14490130.png)

## Inputs

Pre UVDisplacement Matrix:矩阵结构。Pre UVDisplacement Matrix:.取样前应用的UV矩阵 DisplacementTexture.

后UVD位移矩阵。矩阵结构。Post UVDisplacement Matrix:.使用DisplacementTexture置换UV后应用的UV矩阵。

位移解码参数。矢量二维结构。Displacement Decode Parameters:.位移解码参数。DisplacementTexture的解码参数。DeltaUV = ((RedChannel, GreenChannel) - Y) * X.

位移纹理。纹理对象参考。Displacement Texture:.使用的位移纹理。

使用位移的蓝色和阿尔法通道。Boolean.使用置换蓝色和阿尔法通道：。在计算DeltaUV时，是否使用蓝色和阿尔法通道而不是红色和绿色通道。

## Outputs

Composure UVMap设置。Composure UVMap设置结构。
