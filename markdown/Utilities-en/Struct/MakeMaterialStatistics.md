# MakeMaterialStatistics

Adds a node that create a 'MaterialStatistics' from its members

## 图示

![]($-20221218-14572753.png)

## Inputs

Num Vertex Shader Instructions: Integer. Num Vertex Shader Instructions:. Number of instructions used by most expensive vertex shader in the material.

Num Pixel Shader Instructions: Integer. Num Pixel Shader Instructions:. Number of instructions used by most expensive pixel shader in the material.

Num Samplers: Integer. Num Samplers:. Number of samplers required by the material.

Num Vertex Texture Samples: Integer. Num Vertex Texture Samples:. Number of textures sampled by the vertex shader.

Num Pixel Texture Samples: Integer. Num Pixel Texture Samples:. Number of textures sampled by the pixel shader.

Num Virtual Texture Samples: Integer. Num Virtual Texture Samples:. Number of virtual textures sampled.

Num UVScalars: Integer. Num UVScalars:. Number of interpolator scalars required for UVs.

Num Interpolator Scalars: Integer. Num Interpolator Scalars:. Number of interpolator scalars required for user-defined interpolators.  

## Outputs

Material Statistics: Material Statistics Structure.

