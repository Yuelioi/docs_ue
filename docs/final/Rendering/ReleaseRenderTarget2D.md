# ReleaseRenderTarget2D

手动释放渲染目标的GPU资源。这对于创建大量渲染目标的蓝图非常有用，因为垃圾收集器通常会释放得太晚，在GPU内存紧张的平台上可能会出现问题。

目标是Kismet Rendering Library

## 图示

![]($-20221218-20384901.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D对象参考。  

## Outputs

出：执行。

Manually releases GPU resources of a render target. This is useful for blueprint creating a lot of render target that would. normally be released too late by the garbage collector that can be problematic on platforms that have tight GPU memory constrains.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20384901.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.  

## Outputs

Out: Exec.

