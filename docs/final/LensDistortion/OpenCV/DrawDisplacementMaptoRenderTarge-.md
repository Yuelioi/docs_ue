# DrawDisplacementMaptoRenderTarge-

在输出的渲染目标中绘制UV位移贴图。

  * 红色和绿色通道保持扭曲到不扭曲的位移。

  * 蓝色和阿尔法通道保持不扭曲到扭曲的位移。





目标是开放的CVLens失真蓝图库

## 图示

![]($-20221218-19401141.png)

## Inputs

在。执行。

输出渲染目标。纹理 渲染目标 2D对象参考。要绘制的渲染目标。不一定要和变形的渲染对象有相同的分辨率或长宽比。

预先计算的非扭曲位移图。纹理2D对象参考。使用引擎中的OpenCV预先计算的扭曲到不扭曲的位移，或从外部计算。

## Outputs

出：执行。

Draws UV displacement map within the output render target.

  * Red & green channels hold the distort to undistort displacement;

  * Blue & alpha channels hold the undistort to distort displacement.





Target is Open CVLens Distortion Blueprint Library

## 图示

![]($-20221218-19401141.png)

## Inputs

In: Exec.

Output Render Target: Texture Render Target 2D Object Reference. The render target to draw to. Don't necessarily need to have same resolution or aspect ratio as distorted render..

Pre Computed Undistort Displacement Map: Texture 2D Object Reference. Distort to undistort displacement pre computed using OpenCV in engine or externally..  

## Outputs

Out: Exec.

