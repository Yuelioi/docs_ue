# ConvertToTIFF

在一个后台任务中，将一张图片转换为一个TIFF数据阵列

目标是Apple Image Utils Base Async Task Blueprint Proxy

## 图示

![]($-20221218-19164281.png)

## Inputs

在。执行。

源图像。纹理对象参考。要压缩的图像。

旺色：布尔值。TIFF是彩色（真）还是单色（假）。

Use Gpu: 布尔值。是否使用GPU（真）或CPU（假）来压缩。

缩放。Float（单精度）。是否在转换前缩放图像，默认为不缩放。

Rotate（旋转）。ETextureRotationDirection枚举。在转换过程中对图像进行旋转的方向，默认为无。  

## Outputs

出：执行。

关于成功。执政。关于成功。

失败时。执行。失败时。

转换结果。Apple Image Utils图像转换结果结构（按参考）。
