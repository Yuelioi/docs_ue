# AddRuntimeCandidateImage

创建一个ARCandidateImage对象并将其添加到给定的\c UARSessionConfig对象的ARCandidateImageList中。

注意，你需要用你添加的UARSessionConfig重启AR会话，以使变化生效。

在ARCore平台上，如果你不知道图像的物理尺寸，或者物理尺寸是动态的，你可以把PhysicalWidth设为0。而且这个函数需要时间来执行非琐碎的图像处理（20ms - 30ms），.应该在后台线程上运行。

目标是ARBlueprint库

## 图示

![]($-20221218-17573361.png)

## Inputs

在。执行。

会话配置。ARSession配置对象参考。

候选纹理。Texture 2D Object Reference.

友好名称。字符串。

物理宽度：浮点数（单精度）。 

## Outputs

输出。输出：Exec。

返回值。ARCandidate Image Object Reference。如果底层的ARPlatform在运行时成功添加了候选图像，则为一个UARCandidateImage对象指针。否则返回nullptr。
