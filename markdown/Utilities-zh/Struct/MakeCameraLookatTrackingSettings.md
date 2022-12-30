# MakeCameraLookatTrackingSettings

添加一个节点，从其成员中创建一个 "CameraLookatTrackingSettings"。

## 图示

![]($-20221218-14481162.png)

## Inputs

启用查看跟踪。布尔型。启用查看跟踪：。为 "真 "则启用查看跟踪，否则为 "假"。

在跟踪位置绘制调试视图。Boolean.绘制调试时的跟踪位置：。如果为真，就可以画出debug lookat位置的表示。

看跟踪interp速度。Float (single-precision).Look at Tracking Interp Speed:.控制平滑的程度。0.f表示没有平滑，更高的数字表示更快/更紧密的跟踪。

Actor To Track:Actor Soft Object Reference.要跟踪的演员：。如果设置，摄像机将追踪此演员的位置。

相对偏移。矢量。Relative Offset：。从演员位置看的偏移量。如果跟踪一个演员，则相对于演员，否则相对于世界。

允许滚动。Boolean.允许滚动：。为真，允许用户定义的滚动，否则为假。  

## Outputs

摄像机跟踪设置。摄像机跟踪设置结构。
