# MakePerlinNoiseVectorandRemap

This function creates perlin noise from input X, Y, Z, and then range map to RangeOut, and out put to OutX, OutY, OutZ

Target is Kismet Animation Library

## 图示

![]($-20221218-12164844.png)

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

