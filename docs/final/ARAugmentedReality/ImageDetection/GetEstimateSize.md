# GetEstimateSize

- 请注意，当 UARTrackedImage 的追踪状态为追踪时，ARCore 可以返回检测到的图像的有效估计尺寸。

- 的跟踪状态时，ARCore 可以返回检测到的图像的有效估计尺寸。该尺寸应反映图像目标的实际尺寸，它可能与输入的物理尺寸不同

- ARKit 将返回 ARCandidate 图像的物理尺寸。

目标是 ARTracked Image

## 图示

![](/uploads/projects/ue-bluprint/20221218-17565427.png)

## Inputs

目标。ARTracked Image 对象参考。

## Outputs

返回值。矢量 2D 结构。注意，当 UARTrackedImage:的跟踪状态为跟踪时，ARCore 可以返回检测到的图像的有效估计尺寸。该尺寸应反映图像目标的实际尺寸，它可能与输入的物理尺寸不同。ARKit 将返回 ARCandidate 图像的物理尺寸。

<hr>

- - Note that ARCore can return a valid estimate size of the detected image when the tracking state of the UARTrackedImage

- is tracking. The size should reflect the actual size of the image target, which could be different than the input physical

- - ARKit will return the physical size of the ARCandidate image.

Target is ARTracked Image

## 图示

![](/uploads/projects/ue-bluprint/20221218-17565427.png)

## Inputs

Target: ARTracked Image Object Reference.

## Outputs

Return Value: Vector 2D Structure. Note that ARCore can return a valid estimate size of the detected image when the tracking state of the UARTrackedImage: is tracking. The size should reflect the actual size of the image target, which could be different than the input physical: ARKit will return the physical size of the ARCandidate image..
