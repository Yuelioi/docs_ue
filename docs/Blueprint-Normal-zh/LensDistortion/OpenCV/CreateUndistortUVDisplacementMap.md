# CreateUndistortUVDisplacementMap

创建一个包含红色和绿色通道的DisplacementMap的纹理，用于消除相机图像的扭曲。这个调用可能需要相当长的时间来处理，这取决于分辨率。

目标是开放的CVLens失真蓝图库

## 图示

![]($-20221218-19401034.png)

## Inputs

在。执行。

镜头参数。打开CVLens失真参数结构（通过ref）。用于计算UV位移图的透镜畸变参数。

图像大小。Int点结构（由ref）。摄像机图像不变形的尺寸，单位是像素。按比例缩小的分辨率会有影响。

裁剪系数。Float（单精度）。1意味着OpenCV将尝试裁剪掉所有由该过程产生的空像素（基本上是缩放图像）。零将保留所有的像素。  

## Outputs

出：执行。

摄像机视图信息。Open CVCamera View Info结构。由OpenCV计算出来的关于未扭曲空间的信息。可以与SceneCapture一起使用来调整FOV。

返回值。纹理2D对象参考。包含扭曲到非扭曲空间位移图的Texture2D。
