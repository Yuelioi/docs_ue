# GetPitchScalefromMIDIPitch

根据起始频率和期望的 MIDI 音高输出计算音高标度

目标是 Sound Utilities BPFunction Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20594399.png)

## Inputs

在。执行。

Midi 基本音符：整数。对应于起始频率的 MIDI 音符。

目标 Midi 音符：整数。与所需最终频率相对应的 MIDI 音符。

## Outputs

出：执行。

返回值。浮点数（单精度）。为了使基音的音高与目标 MIDI 音符相匹配，要对基音的音高进行调整的量。

<hr>

Calculates Pitch Scalar based on starting frequency and desired MIDI Pitch output

Target is Sound Utilities BPFunction Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20594399.png)

## Inputs

In: Exec.

Base Midi Note: Integer. The MIDI note corresponding to the starting frequency.

Target Midi Note: Integer. The MIDI note corresponding to the desired final frequency.

## Outputs

Out: Exec.

Return Value: Float (single-precision). The amount to scale the pitch of the base note by, in order for its pitch to match the target MIDI note.
