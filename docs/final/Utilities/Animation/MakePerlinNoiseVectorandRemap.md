# MakePerlinNoiseVectorandRemap

该函数从输入的 X、Y、Z 创建 perlin 噪声，然后将范围映射到 RangeOut，并将其输出到 OutX、OutY、OutZ。

目标是 Kismet 动画库

## 图示

![](/uploads/projects/ue-bluprint/20221218-12164844.png)

## Inputs

X：浮点数（单精度）。噪声的输入位置的 X 分量。

Y：浮点数（单精度）。噪声的输入位置的 Y 分量。

Z：浮点数（单精度）。噪声的输入位置的 Z 分量。

Range Out Min X:浮点数（单精度）。X 分量的输出范围的最小值。

Range Out Max X:浮点数（单精度）。X 分量的输出范围的最大值。

Range Out Min Y:浮点数（单精度）。Y 分量的输出范围的最小值。

Range Out Max Y: Float（单精度）。Y 分量的输出范围的最大值。

Range Out Min Z: Float（单精度）。Z 分量的输出范围的最小值。

Range Out Max Z: Float（单精度）。Z 分量的输出范围的最大值。

## Outputs

返回值。向量。

<hr>

This function creates perlin noise from input X, Y, Z, and then range map to RangeOut, and out put to OutX, OutY, OutZ

Target is Kismet Animation Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-12164844.png)

## Inputs

X: Float (single-precision). The x component for the input position of the noise.

Y: Float (single-precision). The y component for the input position of the noise.

Z: Float (single-precision). The z component for the input position of the noise.

Range Out Min X: Float (single-precision). The minimum for the output range for the x component.

Range Out Max X: Float (single-precision). The maximum for the output range for the x component.

Range Out Min Y: Float (single-precision). The minimum for the output range for the y component.

Range Out Max Y: Float (single-precision). The maximum for the output range for the y component.

Range Out Min Z: Float (single-precision). The minimum for the output range for the z component.

Range Out Max Z: Float (single-precision). The maximum for the output range for the z component.

## Outputs

Return Value: Vector.
