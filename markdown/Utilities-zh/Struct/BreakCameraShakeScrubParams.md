# BreakCameraShakeScrubParams

添加一个节点，将'CameraShakeScrubParams'分解成其成员字段

## 图示

![]($-20221218-14321020.png)

## Inputs

Camera Shake Scrub Params。Camera Shake Scrub Params结构（通过引用）。 

## Outputs

绝对时间。Float（单精度）。绝对时间：。要刷新的时间。

Shake Scale。Float（单精度）。摇动比例：。这个摇动的基本刻度。

动态刻度。Float（单精度）。动态刻度：。从相机管理器传递下来的动态刻度，用于下次更新。

Blending Weight（混合权重）。Float（单精度）。Blending Weight（混合权重）：。自动计算的混入/混出比例，当混入由外部处理时（见UCameraShakeBase::GetShakeInfo）。

POV。最小的视图信息结构。POV:. 这个相机抖动应该修改的当前视图。
