# ApplyColorSpaceTransform

Applies a rendering pass of the color transform described in the settings

Target is Open Color IOBlueprint Library

## 图示

![]($-20221218-20164919.png)

## Inputs

In: Exec.

Conversion Settings: Open Color IOColor Conversion Settings Structure (by ref). Settings describing the color space transform to apply.

Input Texture: Texture Object Reference. Texture in the source color space.

Output Render Target: Texture Render Target 2D Object Reference. RenderTarget where to draw the input texture in the destination color space.  

## Outputs

Out: Exec.

Return Value: Boolean. True if a rendering command to apply the transform was queued..

