# BreakMaterialStatistics

添加一个节点，将'MaterialStatistics'分解成其成员字段

## 图示

![]($-20221218-14394618.png)

## Inputs

材料统计。材料统计结构（按参考）。  

## Outputs

Num顶点着色器指令。整数。Num Vertex Shader Instructions:.材质中最昂贵的顶点着色器所使用的指令数量。

Num Pixel Shader指令。整数。Num Pixel Shader Instructions：。材质中最昂贵的像素着色器所使用的指令数量。

Num Samplers:整数。Num Samplers:.材料所需的取样器的数量。

Num Vertex Texture Samples:整数。Num Vertex Texture Samples:.由顶点着色器采样的纹理数量。

Num Pixel Texture Samples:整数。Num Pixel Texture Samples:.由像素着色器采样的纹理数量。

Num Virtual Texture Samples:整数。Num Virtual Texture Samples:.采样的虚拟纹理的数量。

Num UVScalars:整数。Num UVScalars:.UV所需的插值器标量的数量。

Num Interpolator Scalars:整数。Num Interpolator Scalars:.用户定义的插值器所需的插值器标量的数量。
