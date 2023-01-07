# AddLoadingScreenSplash

在加载屏幕上添加一个飞溅元素。

目标是 XRLoading 屏幕功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19240087.png)

## Inputs

在。执行。

纹理。纹理对象参考。(in) 一个用于溅射的纹理资产。

翻译。矢量。(in) 溅射中心的初始平移...

旋转。旋转器。(in) 飞溅屏幕的初始旋转，原点在飞溅屏幕的中心。

尺寸。矢量二维结构。(英寸) 尺寸，四边形与飞溅的屏幕。

三角洲的旋转。旋转器。(in) 递增的旋转，每隔 2 帧加入到四边形变换中。四边形围绕四边形的中心进行旋转。

添加前清除。Boolean. (in) 如果为真，在添加新的飞溅物之前清除飞溅物。

## Outputs

出：执行。

<hr>

Adds a splash element to the loading screen.

Target is XRLoading Screen Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19240087.png)

## Inputs

In: Exec.

Texture: Texture Object Reference. (in) A texture asset to be used for the splash..

Translation: Vector. (in) Initial translation of the center of the splash..

Rotation: Rotator. (in) Initial rotation of the splash screen, with the origin at the center of the splash..

Size: Vector 2D Structure. (in) Size, of the quad with the splash screen..

Delta Rotation: Rotator. (in) Incremental rotation, that is added each 2nd frame to the quad transform. The quad is rotated around the center of the quad..

Clear Before Add: Boolean. (in) If true, clears splashes before adding a new one..

## Outputs

Out: Exec.
