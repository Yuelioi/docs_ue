# MakeGaussianSumBloomSettings

添加一个节点，从其成员中创建一个 "GaussianSumBloomSettings"。

## 图示

![]($-20221218-14534415.png)

## Inputs

强度。浮点数（单精度）。强度：。所有开花贡献的乘数，>=0：关闭，1（默认），>1更亮。

阈值。Float（单精度）。阈值：绽放开始产生影响的最小亮度。-1:所有像素平等地影响绽放（物理上正确，由于省略了阈值通道，所以速度更快），0:所有像素影响绽放的亮度更高，1（默认），>1更亮。

大小比例。Float（单精度）。大小比例：。所有开花尺寸的比例。

# 1 Size: Float (single-precision). Filter 1Size:. Diameter size for the Bloom1 in percent of the screen width. (is done in 1/2 resolution, larger values cost more performance, good for high frequency details). >=0: can be clamped because of shader limitations.

# 2 Size: Float (single-precision). Filter 2Size:. Diameter size for Bloom2 in percent of the screen width. (is done in 1/4 resolution, larger values cost more performance). >=0: can be clamped because of shader limitations.

# 3 Size: Float (single-precision). Filter 3Size:. Diameter size for Bloom3 in percent of the screen width. (is done in 1/8 resolution, larger values cost more performance). >=0: can be clamped because of shader limitations.

# 4 Size: Float (single-precision). Filter 4Size:. Diameter size for Bloom4 in percent of the screen width. (is done in 1/16 resolution, larger values cost more performance, best for wide contributions). >=0: can be clamped because of shader limitations.

# 5 Size: Float (single-precision). Filter 5Size:. Diameter size for Bloom5 in percent of the screen width. (is done in 1/32 resolution, larger values cost more performance, best for wide contributions). >=0: can be clamped because of shader limitations.

# 6 Size: Float (single-precision). Filter 6Size:. Diameter size for Bloom6 in percent of the screen width. (is done in 1/64 resolution, larger values cost more performance, best for wide contributions). >=0: can be clamped because of shader limitations.

# 1 Tint: Linear Color Structure. Filter 1Tint:. Bloom1 tint color.

# 2 Tint: Linear Color Structure. Filter 2Tint:. Bloom2 tint color.

# 3 Tint: Linear Color Structure. Filter 3Tint:. Bloom3 tint color.

# 4 Tint: Linear Color Structure. Filter 4Tint:. Bloom4 tint color.

# 5 Tint: Linear Color Structure. Filter 5Tint:. Bloom5 tint color.

# 6 Tint: Linear Color Structure. Filter 6Tint:. Bloom6 tint color.  

## Outputs

高斯和布隆设置。高斯和布隆设置结构。
