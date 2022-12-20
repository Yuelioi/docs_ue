# DrawDisplacementMaptoRenderTarge-

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

