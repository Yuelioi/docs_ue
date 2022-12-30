# BreakModularSynthPreset

添加一个节点，将'ModularSynthPreset'分解成其成员字段

## 图示

![]($-20221218-14400743.png)

## Inputs

模块化合成器预设。模块化合成器预设结构（按参考）。  

## Outputs

启用复音：布尔值。启用复音：。是否允许多个合成器声音。

Osc 1Type。ESynth1OscType枚举。Osc 1Type:.振荡器1使用什么类型的振荡器。

Osc 1Gain:Float (single-precision).Osc 1Gain:.振荡器1的线性增益[0.0, 1.0]。

Osc 1Octave。Float（单精度）。Osc 1Octave:.振荡器1的八度音[-8.0, 8.0]。

Osc 1Semitones:Float（单精度）。Osc 1Semitones:.振荡器1的半音[-12.0, 12.0]。

Osc 1Cents。Float（单精度）。Osc 1Cents:.振荡器1的分值（半音的几百分之一）。

Osc 1Pulse Width: Float (single-precision).Osc 1Pulse Width（振荡器1脉冲宽度）：。振荡器1的脉冲宽度（当使用方波型振荡器时）。[0.0, 1.0].

Osc 2Type。ESynth1OscType枚举。Osc 2Type:.震荡器2使用什么类型的震荡器。

Osc 2Gain:Float (single-precision).Osc 2Gain:.振荡器2的线性增益[0.0, 1.0]。

Osc 2Octave。Float（单精度）。Osc 2Octave:.振荡器2的八度音。[-8.0, 8.0].

Osc 2Semitones:Float（单精度）。Osc 2Semitones:.震荡器2的半音。[-12.0, 12.0].

Osc 2Cents。Float（单精度）。Osc 2Cents:.振荡器2的分值（半音的几百分之一）。[-100.0, 100.0].

Osc 2Pulse Width: Float（单精度）。Osc 2Pulse Width（振荡器2脉冲宽度）：。振荡器2的脉冲宽度（当使用方波型振荡器时）。[0.0, 1.0].

Portamento。Float（单精度）。Portamento:.要使用的移调量，即从当前音符到下一个音符的滑动量[0.0, 1.0]。

启用联合声。布尔型。启用单声道：。启用强制振荡器没有立体声传播...

启用振荡器同步。布尔值。Enable Oscillator Sync:（启用振荡器同步）。是否启用了振荡器同步。振荡器同步迫使振荡器2的相位与振荡器1的相位一致。

传播。Float（单精度）。展开：。在振荡器1和振荡器2之间使用的立体声扩展量[0.0, 1.0]。

潘。Float（单精度）。平移：。要使用的立体声平移。0.0是中央。-1.0是左边，1.0是右边。

LFO1Frequency:Float（单精度）。LFO1Frequency:.用于LFO1的频率（单位：hz）[0.0, 50.0]。

LFO1Gain。Float（单精度）。LFO1Gain:.用于LFO1的线性增益[0.0, 1.0]。

LFO1Type。ESynthLFOType枚举。LFO1Type:.用于LFO1的LFO的类型。

LFO1Mode:ESynthLFOMode Enum.LFO1Mode:.用于LFO1的模式。

LFO1Patch类型。ESynthLFOPatchType枚举。LFO1Patch类型：。用于LFO1的内置补丁类型（你可以使用补丁参数将其路由到任何可补丁的参数）。

LFO2F频率。Float（单精度）。LFO2F频率：。用于LFO2的频率（单位：hz）[0.0, 50.0]。

LFO2Gain。Float（单精度）。LFO2Gain:。用于LFO2的线性增益[0.0, 1.0]。

LFO2类型。ESynthLFOType枚举。LFO2类型：。用于LFO2的LFO的类型。

LFO2Mode:ESynthLFOMode Enum.LFO2Mode:.用于LFO2的模式。

LFO2Patch类型。ESynthLFOPatchType枚举。LFO2Patch类型：。用于LFO2的内置补丁类型（你可以使用补丁参数将其路由到任何可补丁的参数）。

增益Db。Float (single-precision).增益Db:。用于合成器的整体增益，单位是dB[-90.0, 20.0]。

攻击时间。Float（单精度）。攻击时间：。振幅包络攻击时间（ms）[0.0, 10000]。

衰减时间。Float（单精度）。衰减时间：。振幅包络衰减时间（ms）[0.0, 10000]。

持续增益。浮点（单精度）。持续增益：。振幅包络持续量（线性增益）[0.0, 1.0]。

释放时间。Float（单精度）。释放时间：。振幅包络释放时间（ms）[0.0, 10000]。

Mod Env补丁类型。ESynthModEnvPatch Enum.Mod Env Patch Type:.包络调制器的内置补丁类型。

Mod Env Bias Patch类型。ESynthModEnvBiasPatch Enum.Mod Env Bias Patch Type:.包络调制器偏置输出的内置补丁类型。偏置是指包络输出被延时增益所抵消。

反转调制包络。布尔型。反转调制包络：。是否要反转调制包络。

反转调制包络偏置：布尔值。反转调制包络偏置：。是否对调制包络偏置输出进行反转。

调制包络深度。Float（单精度）。调制包络深度：。使用的 "深度"（即多少）调制包络。这将缩放调制包络的输出。[0.0, 1.0].

调制包络攻击时间。浮点（单精度）。调制包络攻击时间：。调制包络攻击时间（ms）[0.0, 10000]。

调制包络衰减时间。浮点（单精度）。调制包络衰减时间：。调制包络衰减时间（ms）[0.0, 10000]。

调制包络持续增益。浮点（单精度）。调制包络持续增益：。调制包络持续增益（线性增益）[0.0, 1.0]。

调制包络释放时间。Float（单精度）。调制包络释放时间：。调制包络释放时间（以ms为单位）[0.0, 10000]。

Legato: Boolean.Legato:.是否使用连音模式...

重新触发。Boolean.Retrigger:.是否使用再触发模式。

滤波频率。Float (single-precision).滤波器频率：。输出滤波器的截止频率（HZ）[0.0, 20000.0]。

滤波器Q：浮点数（单精度）。滤波器Q：。输出滤波器的谐振（Q）[0.5, 10]。

过滤器类型。ESynthFilterType枚举。滤波器类型：。输出滤波器类型（低通、高通、带通、带阻）。

过滤算法。ESynthFilterAlgorithm Enum.滤波器算法：。输出滤波器电路/算法类型（单极梯形、梯形、状态变量）。

启用立体声延时。布尔型。Stereo Delay Enabled：.在合成器上是否启用了立体声延迟。

立体声延时模式。ESynthStereoDelayMode枚举。立体声延时模式：。合成器的立体声延时模式。

立体声延迟时间。Float（单精度）。立体声延迟时间：。立体声延迟时间（以ms为单位）[0.0, 2000.0]。

立体声延时反馈。浮点（单精度）。立体声延时反馈：。立体声延时线的反馈量[0.0, 1.0]。

立体声延时湿电平。Float（单精度）。立体声延时湿电平：。用于立体声延迟时间的输出湿电平[0.0, 1.0]。

立体声延时率。Float（单精度）。立体声延迟率：。左右立体声延迟线之间的比率（更宽的值是更多的分离）[0.0, 1.0]。

启用的合唱。布尔型。Chorus Enabled:（启用合唱）。合唱效果是否被启用。

合唱深度。Float（单精度）。合唱深度：。合唱效果的深度[0.0, 1.0]。

合唱反馈。Float（单精度）。合唱反馈：。合唱效果中的反馈量[0.0, 1.0]。

合唱频率。浮点（单精度）。合唱频率：。合唱的LFO频率[0.0, 20.0]。

补丁。Array of Epic Synth 1Patch Structures.补丁：。为合成器使用的模块化合成器补丁线。允许将LFO1/LFO2和Modulation Envelope路由到任何可修补的目的地。
