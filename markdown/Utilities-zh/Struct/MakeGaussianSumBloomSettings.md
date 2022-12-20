# MakeGaussianSumBloomSettings

Adds a node that create a 'GaussianSumBloomSettings' from its members

## 图示

![]($-20221218-14534415.png)

## Inputs

Intensity: Float (single-precision). Intensity:. Multiplier for all bloom contributions >=0: off, 1(default), >1 brighter.

Threshold: Float (single-precision). Threshold:. minimum brightness the bloom starts having effect. -1:all pixels affect bloom equally (physically correct, faster as a threshold pass is omitted), 0:all pixels affect bloom brights more, 1(default), >1 brighter.

Size Scale: Float (single-precision). Size Scale:. Scale for all bloom sizes.

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

Gaussian Sum Bloom Settings: Gaussian Sum Bloom Settings Structure.

