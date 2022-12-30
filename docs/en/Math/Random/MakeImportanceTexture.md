# MakeImportanceTexture

Create an FImportanceTexture object for texture-driven importance sampling from a 2D RGBA8 texture

Target is Importance Sampling Library

## 图示

![]($-20221218-19532536.png)

## Inputs

Texture: Texture 2D Object Reference. Texture object to use. Must be RGBA8 format..

Weighting Func: EImportanceWeight Enum. How to turn the texture data into probability weights.  

## Outputs

Return Value: Importance Texture Structure. new ImportanceTexture object for use with ImportanceSample.

