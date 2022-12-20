# MakeSoundModulationLFOParams

Adds a node that create a 'SoundModulationLFOParams' from its members

## 图示

![]($-20221218-15014977.png)

## Inputs

Shape: ESoundModulationLFOShape Enum. Shape:. Shape of oscillating waveform.

Amplitude: Float (single-precision). Amplitude:. Amplitude of oscillator.

Frequency: Float (single-precision). Frequency:. Frequency of oscillator.

Offset: Float (single-precision). Offset:. Offset of oscillator.

Looping: Boolean. Looping:. Whether or not to loop the oscillation more than once.

Bypass: Boolean. Bypass:. If true, bypasses LFO bus from being modulated by parameters, patches, or mixed (LFO remains active and computed)..  

## Outputs

Sound Modulation LFOParams: Sound Modulation LFOParams Structure.

