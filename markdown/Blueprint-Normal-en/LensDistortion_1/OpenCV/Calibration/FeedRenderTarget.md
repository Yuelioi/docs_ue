# FeedRenderTarget

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

