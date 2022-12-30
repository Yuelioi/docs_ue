# BreakCameraLookatTrackingSetting-

添加一个节点，将'CameraLookatTrackingSettings'分解成其成员字段

## 图示

![]($-20221218-14320933.png)

## Inputs

Camera Lookat Tracking Settings（相机追踪设置）。Camera Lookat Tracking Settings结构（通过引用）。 

## Outputs

Enable Look At Tracking（启用跟踪）。Boolean（布尔）。Enable Look at Tracking:（启用跟踪）。为 "真 "则启用侦查跟踪，为 "假 "则禁用。

Draw Debug Look At Tracking Position: Boolean（布尔）。Draw Debug Look at Tracking Position:（绘制调试跟踪位置）。为 "真 "时，画出侦查位置的调试表示。

Look At Tracking Interp Speed（查看跟踪速度）。Float（单精度）。Look at Tracking Interp Speed:. 控制平滑的程度。0.f表示没有平滑，更高的数字表示更快/更紧密的跟踪。

Actor To Track: Actor Soft Object Reference. Actor to Track:（演员追踪）。如果设置了，摄像机就会追踪此角色的位置。

Relative Offset（相对偏移）。矢量。Relative Offset:.相对偏移。要查看的演员位置的偏移量。如果跟踪一个演员，则相对于演员，否则相对于世界。

Allow Roll（允许滚动）。布尔值。允许滚动：。为真，允许用户定义的滚动，否则为假。
