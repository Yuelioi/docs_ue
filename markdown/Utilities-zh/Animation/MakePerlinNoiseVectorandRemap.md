# MakePerlinNoiseVectorandRemap

该函数从输入的X、Y、Z创建perlin噪声，然后将范围映射到RangeOut，并将其输出到OutX、OutY、OutZ。

目标是Kismet动画库

## 图示

![]($-20221218-12164844.png)

## Inputs

X：浮点数（单精度）。噪声的输入位置的X分量。

Y：浮点数（单精度）。噪声的输入位置的Y分量。

Z：浮点数（单精度）。噪声的输入位置的Z分量。

Range Out Min X:浮点数（单精度）。X分量的输出范围的最小值。

Range Out Max X:浮点数（单精度）。X分量的输出范围的最大值。

Range Out Min Y:浮点数（单精度）。Y分量的输出范围的最小值。

Range Out Max Y: Float（单精度）。Y分量的输出范围的最大值。

Range Out Min Z: Float（单精度）。Z分量的输出范围的最小值。

Range Out Max Z: Float（单精度）。Z分量的输出范围的最大值。  

## Outputs

返回值。向量。
