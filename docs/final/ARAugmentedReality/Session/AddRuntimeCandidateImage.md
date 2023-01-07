# AddRuntimeCandidateImage

创建一个 ARCandidateImage 对象并将其添加到给定的\c UARSessionConfig 对象的 ARCandidateImageList 中。

注意，你需要用你添加的 UARSessionConfig 重启 AR 会话，以使变化生效。

在 ARCore 平台上，如果你不知道图像的物理尺寸，或者物理尺寸是动态的，你可以把 PhysicalWidth 设为 0。而且这个函数需要时间来执行非琐碎的图像处理（20ms - 30ms），.应该在后台线程上运行。

目标是 ARBlueprint 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17573361.png)

## Inputs

在。执行。

会话配置。ARSession 配置对象参考。

候选纹理。Texture 2D Object Reference.

友好名称。字符串。

物理宽度：浮点数（单精度）。

## Outputs

输出。输出：Exec。

返回值。ARCandidate Image Object Reference。如果底层的 ARPlatform 在运行时成功添加了候选图像，则为一个 UARCandidateImage 对象指针。否则返回 nullptr。

<hr>

Create an ARCandidateImage object and add it to the ARCandidateImageList of the given \c UARSessionConfig object.

Note that you need to restart the AR session with the \c UARSessionConfig you are adding to to make the change take effect.

On ARCore platform, you can leave the PhysicalWidth to 0 if you don't know the physical size of the image or. the physical size is dynamic. And this function takes time to perform non-trivial image processing (20ms - 30ms),. and should be run on a background thread.

Target is ARBlueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17573361.png)

## Inputs

In: Exec.

Session Config: ARSession Config Object Reference.

Candidate Texture: Texture 2D Object Reference.

Friendly Name: String.

Physical Width: Float (single-precision).

## Outputs

Out: Exec.

Return Value: ARCandidate Image Object Reference. A \c UARCandidateImage Object pointer if the underlying ARPlatform added the candidate image at runtime successfully. Return nullptr otherwise..
