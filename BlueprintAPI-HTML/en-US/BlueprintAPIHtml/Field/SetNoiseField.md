# SetNoiseField

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

