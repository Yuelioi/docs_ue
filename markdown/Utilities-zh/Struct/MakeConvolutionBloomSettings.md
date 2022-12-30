# MakeConvolutionBloomSettings

添加一个节点，从其成员中创建一个 "ConvolutionBloomSettings"。

## 图示

![]($-20221218-14494432.png)

## Inputs

卷积核。纹理2D对象参考。纹理：。替换默认的卷积Bloom内核的纹理。

散射色散。Float (single-precision).Scatter Dispersion:.内核散射色散能量的强度乘数。1.0表示完全使用与内核散射色散相同的能量。

卷积比例。Float（单精度）。大小：。与视口的小轴相比，卷积核图像的相对大小。

卷积中心。矢量2D结构。Center UV：。内核中心的UV位置。应该非常接近于（.5,.5）。

Convolution Boost Min:Float（单精度）。预过滤最小值：。在计算绽放卷积之前，提高选定像素的强度（最小、最大、乘数）。Max < Min 禁用。

Convolution Boost Max: Float（单精度）。预过滤最大值：。在计算绽放卷积之前，提高选定像素的强度（最小、最大、乘数）。Max < Min 禁用。

Convolution Boost Mult:Float（单精度）。预过滤Mult:。在计算绽放卷积之前，提高选定像素的强度（最小、最大、乘数）。Max < Min 禁用。

卷积缓冲区。Float (single-precision).缓冲区比例：。隐含的缓冲区是屏幕大小的一部分，以确保bloom不会在屏幕上缠绕。较大的尺寸会影响性能。

## Outputs

卷积布隆设置。卷积布隆设置结构。
