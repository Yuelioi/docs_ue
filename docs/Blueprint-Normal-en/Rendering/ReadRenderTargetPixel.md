# ReadRenderTargetPixel

Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using integer pixel coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20384074.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

X: Integer.

Y: Integer.  

## Outputs

Out: Exec.

Return Value: Color Structure. Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using integer pixel coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space..

