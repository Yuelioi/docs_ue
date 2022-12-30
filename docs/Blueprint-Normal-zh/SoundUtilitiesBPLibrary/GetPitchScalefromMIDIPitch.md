# GetPitchScalefromMIDIPitch

根据起始频率和期望的MIDI音高输出计算音高标度

目标是Sound Utilities BPFunction Library

## 图示

![]($-20221218-20594399.png)

## Inputs

在。执行。

Midi基本音符：整数。对应于起始频率的MIDI音符。

目标Midi音符：整数。与所需最终频率相对应的MIDI音符。  

## Outputs

出：执行。

返回值。浮点数（单精度）。为了使基音的音高与目标MIDI音符相匹配，要对基音的音高进行调整的量。
