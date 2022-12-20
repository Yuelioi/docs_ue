# ReadRenderTarget

Incredibly inefficient and slow operation! Reads entire render target as sRGB color and returns a linear array of sRGB colors.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result whether the operation succeeded. If successful, OutSamples will an entry per pixel, where each is 8-bit per channel [0,255] BGRA in sRGB space.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20383954.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

Normalize: Boolean.  

## Outputs

Out: Exec.

Out Samples: Array of Color Structures.

Return Value: Boolean. Incredibly inefficient and slow operation! Reads entire render target as sRGB color and returns a linear array of sRGB colors.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result whether the operation succeeded. If successful, OutSamples will an entry per pixel, where each is 8-bit per channel [0,255] BGRA in sRGB space..

