# MakeCameraShakeScrubParams

添加一个节点，从其成员中创建一个 "CameraShakeScrubParams"。

## 图示

![]($-20221218-14481419.png)

## Inputs

绝对时间。Float（单精度）。绝对时间：。要刷新到的时间。

摇动刻度。Float（单精度）。抖动比例：。该抖动的基本刻度。

动态刻度。Float（单精度）。动态比例：。下次更新时从摄像机管理程序传递下来的动态比例。

混合重量。Float（单精度）。Blending Weight:（混合重量）。自动计算的混入/混出比例，当混入由外部处理时（见UCameraShakeBase::GetShakeInfo）。

POV。最小的视图信息结构。POV：。此相机摇动应修改的当前视图。  

## Outputs

相机抖动擦除参数。相机抖动擦除参数结构。
