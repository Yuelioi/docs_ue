# SetNoiseField

如果样本在一个盒子里，定义一个perlin噪声标量值

目标是噪声场

## 图示

![]($-20221218-18595824.png)

## Inputs

目标。噪声场对象参考。

最小范围。Float（单精度）。0和1之间的初始函数值将在MinRange和MaxRange之间进行缩放，然后再乘以幅度。

最大范围。Float（单精度）。0和1之间的初始函数值将在MinRange和MaxRange之间进行缩放，然后再乘以幅度。

噪声变换。变换。将定义perlin噪声的盒子的变换。

## Outputs

返回值。噪声场对象参考。
Defines a perlin noise scalar value if the sample is within a box

Target is Noise Field

## 图示

![]($-20221218-18595824.png)

## Inputs

Target: Noise Field Object Reference.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Noise Transform: Transform. Transform of the box in which the perlin noise will be defined.  

## Outputs

Return Value: Noise Field Object Reference.

