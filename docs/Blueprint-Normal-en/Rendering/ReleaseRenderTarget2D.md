# ReleaseRenderTarget2D

Manually releases GPU resources of a render target. This is useful for blueprint creating a lot of render target that would. normally be released too late by the garbage collector that can be problematic on platforms that have tight GPU memory constrains.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20384901.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.  

## Outputs

Out: Exec.

