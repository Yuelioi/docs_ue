# BreakDynamicPlayRateSettings

添加一个节点，将'DynamicPlayRateSettings'分解成其成员字段

## 图示

![]($-20221218-14353798.png)

## Inputs

动态播放率设置。动态播放率设置结构（通过参考）。 

## Outputs

已启用。布尔值。Enabled:（启用）。启用/禁用动态播放率的调整。

Scale Bias Clamp: 输入刻度偏置钳结构。Scale Bias Clamp:。用于播放速率调整的可选缩放、偏置和箝位控制。

重新映射曲线。曲线浮点对象参考。Remapping Curve（重映射曲线）：。可选的播放率重映射曲线（X轴：源播放率，Y轴：目标播放率）。

根部运动采样率。Float（单精度）。根部运动采样率：。用于分析和确定未来零速度的根部运动时间步长（每秒）。

零根运动角度阈值。Float（单精度）。零根运动角度阈值：。根部运动角度阈值，用于确定方向的重大变化（例如：识别支点）。

零根运动位移误差。浮点（单精度）。零根运动位移误差：。根部运动位移误差公差，用于识别与ZeroRootMotionAngleThreshold相关的假阳性。
