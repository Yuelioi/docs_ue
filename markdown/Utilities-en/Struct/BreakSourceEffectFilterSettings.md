# BreakSourceEffectFilterSettings

Adds a node that breaks a 'SourceEffectFilterSettings' into its member fields

## 图示

![]($-20221218-14432839.png)

## Inputs

Source Effect Filter Settings: Source Effect Filter Settings Structure (by ref).  

## Outputs

Filter Circuit: ESourceEffectFilterCircuit Enum. Filter Circuit:. The type of filter circuit to use..

Filter Type: ESourceEffectFilterType Enum. Filter Type:. The type of filter to use..

Cutoff Frequency: Float (single-precision). Cutoff Frequency:. The filter cutoff frequency.

Filter Q: Float (single-precision). Filter Q:. The filter resonance..

Audio Bus Modulation: Array of Source Effect Filter Audio Bus Modulation Settings Structures. Audio Bus Modulation:. Audio bus settings to use to modulate the filter frequency cutoff (auto-wah) with arbitrary audio from an audio bus.

