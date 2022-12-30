# BreakConvolutionBloomSettings

添加一个节点，将'ConvolutionBloomSettings'分解成其成员字段

## 图示

![]($-20221218-14332323.png)

## Inputs

Convolution Bloom Settings。Convolution Bloom Settings结构（通过引用）。 

## Outputs

Convolution Kernel: 纹理2D对象参考。纹理：。替换默认卷积绽放内核的纹理。

Scatter Dispersion（散射色散）。Float（单精度）。Scatter Dispersion:.散射色散 内核散射色散能量的强度乘数。1.0表示完全使用与内核散射色散相同的能量。

卷积比例。Float（单精度）。大小：。与视口的小轴相比，卷积核图像的相对大小。

卷积中心。矢量二维结构。Center UV:. 内核中心的UV位置。应该非常接近于（.5,.5）。

Convolution Boost Min: Float（单精度）。预过滤最小值：。在计算Bloom卷积之前，提升选定像素的强度（Min, Max, Multiplier）。Max < Min 禁用。

Convolution Boost Max：浮点数（单精度）。预过滤最大值：。在计算Bloom卷积之前，提高选定像素的强度（最小、最大、乘数）。Max < Min 停用。

Convolution Boost Mult: 浮点数（单精度）。Pre Filter Mult:. 在计算Bloom卷积之前，提高选定像素的强度（最小、最大、乘数）。Max < Min 停用。

卷积缓冲区（Convolution Buffer）。Float（单精度）。缓冲区比例：。隐含的缓冲区是屏幕尺寸的一部分，以确保bloom不会在屏幕上缠绕。较大的尺寸会影响性能。
