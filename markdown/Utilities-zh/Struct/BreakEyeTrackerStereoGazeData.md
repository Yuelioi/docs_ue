# BreakEyeTrackerStereoGazeData

添加一个节点，将'EyeTrackerStereoGazeData'分解成其成员字段

## 图示

![]($-20221218-14355802.png)

## Inputs

Eye Tracker Stereo Gaze Data。Eye Tracker Stereo Gaze Data结构（通过引用）。 

## Outputs

左眼原点。向量。左眼原点：。左眼注视射线的起点。

左眼方向。矢量。左眼方向：。左眼注视光线的前进方向。

右眼起源。向量。Right Eye Origin:.右眼原点。右眼注视光线的起点。

右眼方向。向量。右眼方向:。右眼注视光线的前进方向。

固定点。向量。固定点：。眼睛汇聚的位置。这是被追踪的观看者正在看的3D点。

信心值。Float（单精度）。信心值：。代表对上述注视射线数据的信心的值[0...1]。稳定的、可靠追踪的眼睛会在1或接近1。快速移动或不可靠追踪的眼睛将处于或接近0。
