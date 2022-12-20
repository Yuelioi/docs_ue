# BreakSubmixEffectDynamicsProcess-

Adds a node that breaks a 'SubmixEffectDynamicsProcessorSettings' into its member fields

## 图示

![]($-20221218-14440008.png)

## Inputs

Submix Effect Dynamics Processor Settings: Submix Effect Dynamics Processor Settings Structure (by ref).  

## Outputs

Type: ESubmixEffectDynamicsProcessorType Enum. Dynamics Processor Type:. Type of processor to apply.

Peak Mode: ESubmixEffectDynamicsPeakMode Enum. Peak Mode:. Mode of peak detection used on input key signal.

Link Mode: ESubmixEffectDynamicsChannelLinkMode Enum. Link Mode:. Mode of peak detection if key signal is multi-channel.

Input Gain (D B): Float (single-precision). Input Gain Db:. The input gain of the dynamics processor.

Threshold (D B): Float (single-precision). Threshold Db:. The threshold at which to perform a dynamics processing operation.

Ratio: Float (single-precision). Ratio:. The dynamics processor ratio used for compression/expansion.

Knee (D B): Float (single-precision). Knee Bandwidth Db:. The knee bandwidth of the processor to use.

Look Ahead (Ms): Float (single-precision). Look Ahead Msec:. The amount of time to look ahead of the current audio (Allows for transients to be included in dynamics processing).

Attack Time (Ms): Float (single-precision). Attack Time Msec:. The amount of time to ramp into any dynamics processing effect.

Release Time (Ms): Float (single-precision). Release Time Msec:. The amount of time to release the dynamics processing effect.

Key Source: ESubmixEffectDynamicsKeySource Enum. Key Source.

External Audio Bus: Audio Bus Object Reference. External Audio Bus:. If set, uses output of provided audio bus as modulator of input signal for dynamics processor (Uses input signal as default modulator).

External Submix: Sound Submix Object Reference. External Submix:. If set, uses output of provided submix as modulator of input signal for dynamics processor (Uses input signal as default modulator).

Analog Mode: Boolean. Analog Mode:. Toggles treating the attack and release envelopes as analog-style vs digital-style (Analog will respond a bit more naturally/slower).

Bypass: Boolean. Bypass:. Whether or not to bypass effect.

Key Audition: Boolean. Key Audition:. Audition the key modulation signal, bypassing enveloping and processing the input signal..

External Input Gain (D B): Float (single-precision). Key Gain Db:. Gain to apply to key signal if key source not set to default (input)..

Output Gain (D B): Float (single-precision). Output Gain Db:. The output gain of the dynamics processor.

Key Highshelf: Submix Effect Dynamic Processor Filter Settings Structure. Key Highshelf:. High Shelf filter settings for key signal (external signal if supplied or input signal if not).

Key Lowshelf: Submix Effect Dynamic Processor Filter Settings Structure. Key Lowshelf:. Low Shelf filter settings for key signal (external signal if supplied or input signal if not).

