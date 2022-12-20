# MakeSubmixEffectMultibandCompres-

Adds a node that create a 'SubmixEffectMultibandCompressorSettings' from its members

## 图示

![]($-20221218-15024688.png)

## Inputs

Type: ESubmixEffectDynamicsProcessorType Enum. Dynamics Processor Type:. Controls how each band will react to audio above its threshold.

Peak Mode: ESubmixEffectDynamicsPeakMode Enum. Peak Mode:. Controls how quickly the bands will react to a signal above its threshold.

Link Mode: ESubmixEffectDynamicsChannelLinkMode Enum. Link Mode:. Whether to compress all channels equally, and how to evaluate the overall level.

Look Ahead (Ms): Float (single-precision). Look Ahead Msec:. The amount of time to look ahead of the current audio. Allows for transients to be included in dynamics processing..

Analog Mode: Boolean. Analog Mode:. Toggles treating the attack and release envelopes as analog-style vs digital-style. Analog will respond a bit more naturally/slower..

Four Pole: Boolean. Four Pole:. Turning off FourPole mode will use cheaper, shallower 2-pole crossovers.

Bypass: Boolean. Bypass:. Whether or not to bypass effect.

Key Source: ESubmixEffectDynamicsKeySource Enum. Key Source.

External Audio Bus: Audio Bus Object Reference. External Audio Bus:. If set, uses output of provided submix as modulator of input signal for dynamics processor (Uses input signal as default modulator).

External Submix: Sound Submix Object Reference. External Submix:. If set, uses output of provided submix as modulator of input signal for dynamics processor (Uses input signal as default modulator).

External Input Gain (D B): Float (single-precision). Key Gain Db:. Gain to apply to key signal if external input is supplied.

Key Audition: Boolean. Key Audition:. Audition the key modulation signal, bypassing enveloping and processing the input signal..

Bands: Array of Dynamics Band Settings Structures. Bands:. Each band is a full dynamics processor, affecting at a unique frequency range.  

## Outputs

Submix Effect Multiband Compressor Settings: Submix Effect Multiband Compressor Settings Structure.

