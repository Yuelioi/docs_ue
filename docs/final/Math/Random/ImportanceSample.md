# ImportanceSample

按照 Texture2D 亮度的比例分配样本点。

目标是重要性取样库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19532407.png)

## Inputs

纹理。重要性 纹理结构（由参考文献）。

兰德。矢量二维结构（通过参考）。随机的 2D 点，其分量均匀地分布在 0 和 1 之间。

样本。整数。将被使用的样本总数。

强度。浮点数（单精度）。光的总强度。

## Outputs

样品位置。矢量二维结构。

样品颜色：线性颜色结构。

采样强度。Float（单精度）。

样本大小。Float (single-precision).

<hr>

Distribute sample points proportional to Texture2D luminance.

Target is Importance Sampling Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19532407.png)

## Inputs

Texture: Importance Texture Structure (by ref).

Rand: Vector 2D Structure (by ref). Random 2D point with components evenly distributed between 0 and 1.

Samples: Integer. Total number of samples that will be used.

Intensity: Float (single-precision). Total intensity for light.

## Outputs

Sample Position: Vector 2D Structure.

Sample Color: Linear Color Structure.

Sample Intensity: Float (single-precision).

Sample Size: Float (single-precision).
