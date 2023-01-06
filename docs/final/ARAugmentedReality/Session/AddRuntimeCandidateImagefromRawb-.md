# AddRuntimeCandidateImagefromRawb-

从原始像素数据创建一个ARCandidateImage对象，并将其添加到给定的\c UARSessionConfig对象的ARCandidateImageList中。

注意，你需要用你所添加的UARSessionConfig重新启动AR会话，以使变化生效。

在ARCore平台上，如果你不知道图像的物理尺寸，或者物理尺寸是动态的，你可以把PhysicalWidth和PhysicalHeight设为0。而且这个函数需要时间来执行非琐碎的图像处理（20ms - 30ms），.应该在后台线程上运行。

目标是谷歌ARCore会话函数库

## 图示

![]($-20221218-17573478.png)

## Inputs

在。Exec.

会话配置。ARSession配置对象参考。

图像灰度像素。字节数组。

图像宽度：整数。

图像高度：整数。

友好名称。字符串。

物理宽度：浮点数（单精度）。

候选纹理。纹理2D对象参考。 

## Outputs

输出。执行。

返回值。ARCandidate Image Object Reference。A /c UARCandidateImage对象指针，如果底层的ARPlatform在运行时成功添加了候选图像。否则返回nullptr。

Create an ARCandidateImage object from the raw pixel data and add it to the ARCandidateImageList of the given \c UARSessionConfig object.

Note that you need to restart the AR session with the \c UARSessionConfig you are adding to to make the change take effect.

On ARCore platform, you can leave the PhysicalWidth and PhysicalHeight to 0 if you don't know the physical size of the image or. the physical size is dynamic. And this function takes time to perform non-trivial image processing (20ms - 30ms),. and should be run on a background thread.

Target is Google ARCore Session Function Library

## 图示

![]($-20221218-17573478.png)

## Inputs

In: Exec.

Session Config: ARSession Config Object Reference.

Image Grayscale Pixels: Array of Bytes.

Image Width: Integer.

Image Height: Integer.

Friendly Name: String.

Physical Width: Float (single-precision).

Candidate Texture: Texture 2D Object Reference.  

## Outputs

Out: Exec.

Return Value: ARCandidate Image Object Reference. A \c UARCandidateImage Object pointer if the underlying ARPlatform added the candidate image at runtime successfully. Return nullptr otherwise..

