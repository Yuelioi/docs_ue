# MakeSoundSubmixSpectralAnalysisB-

添加一个节点，从其成员中创建一个 "SoundSubmixSpectralAnalysisBandSettings"。

## 图示

![]($-20221218-15015502.png)

## Inputs

乐队频率。Float（单精度）。频带频率：。要分析的幅值的频带。

攻击时间Msec:整数。攻击时间Msec:。委托回调的FFT波段插值的攻击时间。

释放时间Msec:整数。释放时间Msec:。委托回调的FFT波段插值的释放时间。

QFactor。Float（单精度）。QFactor:。带宽除以中心频率的比率。只在频谱分析类型被设置为恒定Q值时使用。

## Outputs

Sound Submix Spectral Analysis Band Settings:声音子混音频谱分析带设置结构。
