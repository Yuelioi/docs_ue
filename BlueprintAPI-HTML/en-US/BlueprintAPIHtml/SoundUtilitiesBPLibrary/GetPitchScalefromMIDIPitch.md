# GetPitchScalefromMIDIPitch

Calculates Pitch Scalar based on starting frequency and desired MIDI Pitch output

Target is Sound Utilities BPFunction Library

## 图示

![]($-20221218-20594399.png)

## Inputs

In: Exec.

Base Midi Note: Integer. The MIDI note corresponding to the starting frequency.

Target Midi Note: Integer. The MIDI note corresponding to the desired final frequency.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The amount to scale the pitch of the base note by, in order for its pitch to match the target MIDI note.

