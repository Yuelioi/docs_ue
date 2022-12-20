# BreakSourceEffectRingModulationS-

Adds a node that breaks a 'SourceEffectRingModulationSettings' into its member fields

## 图示

![]($-20221218-14433543.png)

## Inputs

Source Effect Ring Modulation Settings: Source Effect Ring Modulation Settings Structure (by ref).  

## Outputs

Modulator Type: ERingModulatorTypeSourceEffect Enum. Modulator Type:. Ring modulation modulator oscillator type.

Frequency: Float (single-precision). Frequency:. Ring modulation frequency.

Depth: Float (single-precision). Depth:. Ring modulation depth.

Dry Level: Float (single-precision). Dry Level:. Gain for the dry signal (no ring mod).

Wet Level: Float (single-precision). Wet Level:. Gain for the wet signal (with ring mod).

Audio Bus Modulator: Audio Bus Object Reference. Audio Bus Modulator:. Audio bus to use to modulate the effect.

