# CreateUndistortUVDisplacementMap

创建一个包含红色和绿色通道的 DisplacementMap 的纹理，用于消除相机图像的扭曲。这个调用可能需要相当长的时间来处理，这取决于分辨率。

目标是开放的 CVLens 失真蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19401034.png)

## Inputs

在。执行。

镜头参数。打开 CVLens 失真参数结构（通过 ref）。用于计算 UV 位移图的透镜畸变参数。

图像大小。Int 点结构（由 ref）。摄像机图像不变形的尺寸，单位是像素。按比例缩小的分辨率会有影响。

裁剪系数。Float（单精度）。1 意味着 OpenCV 将尝试裁剪掉所有由该过程产生的空像素（基本上是缩放图像）。零将保留所有的像素。

## Outputs

出：执行。

摄像机视图信息。Open CVCamera View Info 结构。由 OpenCV 计算出来的关于未扭曲空间的信息。可以与 SceneCapture 一起使用来调整 FOV。

返回值。纹理 2D 对象参考。包含扭曲到非扭曲空间位移图的 Texture2D。

<hr>

Creates a texture containing a DisplacementMap in the Red and the Green channel for undistorting a camera image.. This call can take quite some time to process depending on the resolution.

Target is Open CVLens Distortion Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19401034.png)

## Inputs

In: Exec.

Lens Parameters: Open CVLens Distortion Parameters Structure (by ref). The Lens distortion parameters with which to compute the UV displacement map..

Image Size: Int Point Structure (by ref). The size of the camera image to be undistorted in pixels. Scaled down resolution will have an impact..

Cropping Factor: Float (single-precision). One means OpenCV will attempt to crop out all empty pixels resulting from the process (essentially zooming the image). Zero will keep all pixels..

## Outputs

Out: Exec.

Camera View Info: Open CVCamera View Info Structure. Information computed by OpenCV about the undistorted space. Can be used with SceneCapture to adjust FOV..

Return Value: Texture 2D Object Reference. Texture2D containing the distort to undistort space displacement map..
