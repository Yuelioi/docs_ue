# SetCubemapBlend

Creates sky lighting from a blend between two cubemaps, which is only valid when SourceType is set to SpecifiedCubemap.. This can be used to seamlessly transition sky lighting between different times of day.. The caller should continue to update the blend until BlendFraction is 0 or 1 to reduce rendering cost.. The caller is responsible for avoiding pops due to changing the source or destination.

Target is Sky Light Component

## 图示

![]($-20221218-20583858.png)

## Inputs

In: Exec.

Target: Sky Light Component Object Reference.

Source Cubemap: Texture Cube Object Reference.

Destination Cubemap: Texture Cube Object Reference.

In Blend Fraction: Float (single-precision).  

## Outputs

Out: Exec.

