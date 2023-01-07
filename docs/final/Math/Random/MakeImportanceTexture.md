# MakeImportanceTexture

创建一个 FImportanceTexture 对象，用于从 2D RGBA8 纹理中进行纹理驱动的重要性采样

目标是重要性取样库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19532536.png)

## Inputs

纹理。纹理 2D 对象参考。要使用的纹理对象。必须是 RGBA8 格式。

加权函数。EImportanceWeight Enum。如何将纹理数据变成概率权重。

## Outputs

返回值。重要性纹理结构。新的重要性纹理对象，与 ImportanceSample 一起使用。

<hr>

Create an FImportanceTexture object for texture-driven importance sampling from a 2D RGBA8 texture

Target is Importance Sampling Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19532536.png)

## Inputs

Texture: Texture 2D Object Reference. Texture object to use. Must be RGBA8 format..

Weighting Func: EImportanceWeight Enum. How to turn the texture data into probability weights.

## Outputs

Return Value: Importance Texture Structure. new ImportanceTexture object for use with ImportanceSample.
