# CreateUndistortUVDisplacementMap

Creates a texture containing a DisplacementMap in the Red and the Green channel for undistorting a camera image.. This call can take quite some time to process depending on the resolution.

Target is Open CVLens Distortion Blueprint Library

## 图示

![]($-20221218-19401034.png)

## Inputs

In: Exec.

Lens Parameters: Open CVLens Distortion Parameters Structure (by ref). The Lens distortion parameters with which to compute the UV displacement map..

Image Size: Int Point Structure (by ref). The size of the camera image to be undistorted in pixels. Scaled down resolution will have an impact..

Cropping Factor: Float (single-precision). One means OpenCV will attempt to crop out all empty pixels resulting from the process (essentially zooming the image). Zero will keep all pixels..  

## Outputs

Out: Exec.

Camera View Info: Open CVCamera View Info Structure. Information computed by OpenCV about the undistorted space. Can be used with SceneCapture to adjust FOV..

Return Value: Texture 2D Object Reference. Texture2D containing the distort to undistort space displacement map..

