# ConvertToHEIF

在一个后台任务中，将一张图片转换为HEIF数据阵列

目标是Apple Image Utils Base Async Task Blueprint Proxy

## 图示

![]($-20221218-19163925.png)

## Inputs

在。执行。

源图像。纹理对象参考。要压缩的图像。

质量。整数。要压缩的质量水平。

旺色：布尔值。HEIF是彩色（真）还是单色（假）。

Use Gpu: 布尔值。是否使用GPU（真）或CPU（假）来压缩。

缩放。Float（单精度）。是否在转换前缩放图像，默认为不缩放。

Rotate（旋转）。ETextureRotationDirection枚举。在转换过程中对图像进行旋转的方向，默认为无。  

## Outputs

出：执行。

关于成功。执政。关于成功。

失败时。执行。失败时。

转换结果。Apple Image Utils图像转换结果结构（按参考）。

Converts a image to an array of HEIF data in a background task

Target is Apple Image Utils Base Async Task Blueprint Proxy

## 图示

![]($-20221218-19163925.png)

## Inputs

In: Exec.

Source Image: Texture Object Reference. the image to compress.

Quality: Integer. the quality level to compress to.

Want Color: Boolean. whether the HEIF is color (true) or monochrome (false).

Use Gpu: Boolean. whether to use the GPU (true) or the CPU (false) to compress.

Scale: Float (single-precision). whether to scale the image before conversion, defaults to no scaling.

Rotate: ETextureRotationDirection Enum. a direction to rotate the image in during conversion, defaults to none.  

## Outputs

Out: Exec.

On Success: Exec. On Success.

On Failure: Exec. On Failure.

Conversion Result: Apple Image Utils Image Conversion Result Structure (by ref).

