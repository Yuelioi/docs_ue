# LerpUsingHSV_LinearColor

Linearly interpolates between two colors by the specified Alpha amount (100% of A when Alpha=0 and 100% of B when Alpha=1). The interpolation is performed in HSV color space taking the shortest path to the new color's hue. This can give better results than a normal lerp, but is much more expensive. The incoming colors are in RGB space, and the output color will be RGB. The alpha value will also be interpolated.

Target is Kismet Math Library

## 图示

![]($-20221218-19472948.png)

## Inputs

A: Linear Color Structure. The color and alpha to interpolate from as linear RGBA.

B: Linear Color Structure. The color and alpha to interpolate to as linear RGBA.

Alpha: Float (single-precision). Scalar interpolation amount (usually between 0.0 and 1.0 inclusive).  

## Outputs

Return Value: Linear Color Structure. The interpolated color in linear RGB space along with the interpolated alpha value.

