# LerpUsingHSV_LinearColor

以指定的 Alpha 值在两种颜色之间进行线性插值（Alpha=0 时为 A 的 100%，Alpha=1 时为 B 的 100%）。插值是在 HSV 色彩空间中进行的，采取最短的路径到达新颜色的色调。这比一般的插值能得到更好的结果，但成本要高得多。输入的颜色是在 RGB 空间，输出的颜色将是 RGB。alpha 值也将被插值。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19472948.png)

## Inputs

A：线性颜色结构。作为线性 RGBA 插值的颜色和 α。

B：线性颜色结构。将颜色和阿尔法插值为线性 RGBA。

阿尔法。Float（单精度）。标度插值量（通常在 0.0 和 1.0 之间，包括在内）。

## Outputs

返回值。线性颜色结构。线性 RGB 空间中的插值颜色，以及插值的 alpha 值。

<hr>

Linearly interpolates between two colors by the specified Alpha amount (100% of A when Alpha=0 and 100% of B when Alpha=1). The interpolation is performed in HSV color space taking the shortest path to the new color's hue. This can give better results than a normal lerp, but is much more expensive. The incoming colors are in RGB space, and the output color will be RGB. The alpha value will also be interpolated.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19472948.png)

## Inputs

A: Linear Color Structure. The color and alpha to interpolate from as linear RGBA.

B: Linear Color Structure. The color and alpha to interpolate to as linear RGBA.

Alpha: Float (single-precision). Scalar interpolation amount (usually between 0.0 and 1.0 inclusive).

## Outputs

Return Value: Linear Color Structure. The interpolated color in linear RGB space along with the interpolated alpha value.
