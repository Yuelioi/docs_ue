# MakeDynamicPlayRateSettings

添加一个节点，从其成员中创建一个 "DynamicPlayRateSettings"。

## 图示

![]($-20221218-14521419.png)

## Inputs

已启用。布尔型。启用：。启用/禁用动态播放率调整。

刻度偏置钳。输入标度偏置钳结构。刻度偏置钳：。可选的缩放、偏置和夹持控制，用于播放率的调整。

重新映射曲线。曲线浮点对象参考。重映射曲线：。可选的播放率重映射曲线（X轴：源播放率，Y轴：目标播放率）。

根部运动采样率。Float (single-precision).根部运动采样率：。用于分析和确定未来零点速度的根部运动时间步长（每秒）。

零根运动角阈值。Float（单精度）。零根运动角阈值：。根部运动角度阈值，用于确定方向的重大变化（例如：识别支点）。

零根运动位移误差。Float (single-precision).Zero Root Motion Displacement Error:.根部运动位移误差公差，用于识别与ZeroRootMotionAngleThreshold相关的假阳性。  

## Outputs

动态播放率设置。动态播放率设置结构。
