# GetEstimateSize

  * 请注意，当UARTrackedImage的追踪状态为追踪时，ARCore可以返回检测到的图像的有效估计尺寸。

  * 的跟踪状态时，ARCore可以返回检测到的图像的有效估计尺寸。该尺寸应反映图像目标的实际尺寸，它可能与输入的物理尺寸不同

  * ARKit将返回ARCandidate图像的物理尺寸。





目标是ARTracked Image

## 图示

![]($-20221218-17565427.png)

## Inputs

目标。ARTracked Image 对象参考。 

## Outputs

返回值。矢量2D结构。注意，当UARTrackedImage:的跟踪状态为跟踪时，ARCore可以返回检测到的图像的有效估计尺寸。该尺寸应反映图像目标的实际尺寸，它可能与输入的物理尺寸不同。ARKit将返回ARCandidate图像的物理尺寸。

  *   * Note that ARCore can return a valid estimate size of the detected image when the tracking state of the UARTrackedImage

  * is tracking. The size should reflect the actual size of the image target, which could be different than the input physical

  *   * ARKit will return the physical size of the ARCandidate image.





Target is ARTracked Image

## 图示

![]($-20221218-17565427.png)

## Inputs

Target: ARTracked Image Object Reference.  

## Outputs

Return Value: Vector 2D Structure. Note that ARCore can return a valid estimate size of the detected image when the tracking state of the UARTrackedImage: is tracking. The size should reflect the actual size of the image target, which could be different than the input physical: ARKit will return the physical size of the ARCandidate image..

