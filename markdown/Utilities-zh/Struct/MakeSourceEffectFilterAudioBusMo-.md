# MakeSourceEffectFilterAudioBusMo-

Adds a node that create a 'SourceEffectFilterAudioBusModulationSettings' from its members

## 图示

![]($-20221218-15020808.png)

## Inputs

Audio Bus: Audio Bus Object Reference. Audio Bus:. Audio bus to use to modulate the filter.

Attack Time (Ms): Integer. Envelope Follower Attack Time Msec:. The amplitude envelope follower attack time (in milliseconds) on the audio bus..

Release Time (Ms): Integer. Envelope Follower Release Time Msec:. The amplitude envelope follower release time (in milliseconds) on the audio bus..

Envelope Gain Multiplier: Float (single-precision). Envelope Gain Multiplier:. An amount to scale the envelope follower output to map to the modulation values..

Min Frequency Modulation Amount: Float (single-precision). Min Frequency Modulation:. The frequency modulation value (in semitones from the filter frequency) to use when the envelope is quietest.

Max Frequency Modulation Amount: Float (single-precision). Max Frequency Modulation:. The frequency modulation value (in semitones from the filter frequency) to use when the envelope is loudest.

Min Resonance Modulation Amount: Float (single-precision). Min Resonance Modulation:. The resonance modulation value to use when the envelope is quietest.

Max Resonance Modulation Amount: Float (single-precision). Max Resonance Modulation:. The resonance modulation value to use when the envelope is loudest.  

## Outputs

Source Effect Filter Audio Bus Modulation Settings: Source Effect Filter Audio Bus Modulation Settings Structure.

