# ImportanceSample

Distribute sample points proportional to Texture2D luminance.

Target is Importance Sampling Library

## 图示

![]($-20221218-19532407.png)

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

