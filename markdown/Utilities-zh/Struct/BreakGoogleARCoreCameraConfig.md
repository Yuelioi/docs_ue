# BreakGoogleARCoreCameraConfig

添加一个节点，将'GoogleARCoreCameraConfig'分解成其成员字段

## 图示

![]($-20221218-14374690.png)

## Inputs

谷歌ARCore相机配置。谷歌ARCore相机配置结构（按参考）。  

## Outputs

摄像机图像分辨率。Int点结构。摄像机图像分辨率：.CPU可访问的摄像机图像分辨率。

摄像机纹理分辨率。Int Point Structure.Camera Texture Resolution: 摄像机纹理分辨率。可供图形API和着色器访问的相机图像的纹理分辨率。

相机ID。字符串。相机ID:.将在此CameraConfig.中使用的摄像机ID。

目标FPS: Bitmask Integer.目标FPS:.摄像机的目标FPS。

深度传感器的使用。Bitmask Integer.Depth Sensor Usage:.深度传感器用法。摄像机所需的深度传感器用途。
