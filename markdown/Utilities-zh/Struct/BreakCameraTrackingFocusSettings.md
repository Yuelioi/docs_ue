# BreakCameraTrackingFocusSettings

添加一个节点，将'CameraTrackingFocusSettings'分解成其成员字段

## 图示

![]($-20221218-14321401.png)

## Inputs

相机跟踪焦点设置。摄像机跟踪聚焦设置结构（通过引用）。 

## Outputs

Actor To Track: Actor Soft Object Reference. Actor to Track:（要追踪的演员）。焦点距离将与该演员的位置相联系。

Relative Offset（相对偏移）。矢量。Relative Offset:.相对偏移。从演员位置到追踪的偏移。如果跟踪一个演员，则相对于演员，否则相对于世界。

Draw Debug Tracking Focus Point：布尔值。Draw Debug Tracking Focus Point: 绘制调试跟踪焦点。为真，可以画出被追踪位置的调试表示。
