# FeedRenderTarget

将一个渲染目标送入校准。它必须在图像的某个地方包含一个棋盘。输入的图像应该来自同一台摄像机。

目标是开放的CVLens校准器

## 图示

![]($-20221218-19403028.png)

## Inputs

在。执行。

目标。打开CVLens校准器对象参考。

纹理渲染目标。纹理渲染目标 2D对象参考。  

## Outputs

出：执行。

返回值。布尔值：如果校准器在图像中发现棋盘格，则为真。

Feeds a render target to the calibration. It must contain a checkerboard somewhere in the image.. The images fed in should come from the same camera.

Target is Open CVLens Calibrator

## 图示

![]($-20221218-19403028.png)

## Inputs

In: Exec.

Target: Open CVLens Calibrator Object Reference.

Texture Render Target: Texture Render Target 2D Object Reference.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the calibrator found a checkerboard in the image..

