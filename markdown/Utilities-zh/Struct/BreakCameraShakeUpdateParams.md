# BreakCameraShakeUpdateParams

添加一个节点，将'CameraShakeUpdateParams'分解到其成员字段中

## 图示

![]($-20221218-14321304.png)

## Inputs

Camera Shake Update Params。Camera Shake Update Params结构（通过引用）。 

## Outputs

Delta Time（三角洲时间）。Float（单精度）。Delta Time:. 自上次更新以来所经过的时间。

Shake Scale（摇动比例）。Float (single-precision). 摇动比例：。此晃动的基本刻度。

动态刻度。Float（单精度）。动态刻度：。从相机管理器传递下来的动态刻度，用于下次更新。

Blending Weight（混合权重）。Float（单精度）。Blending Weight（混合权重）：。自动计算的混入/混出比例，当混入由外部处理时（见UCameraShakeBase::GetShakeInfo）。

POV。最小的视图信息结构。POV:. 这个相机抖动应该修改的当前视图。
