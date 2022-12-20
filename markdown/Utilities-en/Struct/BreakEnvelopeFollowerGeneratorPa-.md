# BreakEnvelopeFollowerGeneratorPa-

Adds a node that breaks a 'EnvelopeFollowerGeneratorParams' into its member fields

## 图示

![]($-20221218-14355019.png)

## Inputs

Envelope Follower Generator Params: Envelope Follower Generator Params Structure (by ref).  

## Outputs

Bypass: Boolean. Bypass:. If true, bypasses generator from being modulated by parameters, patches, or mixed (remains active and computed)..

Invert: Boolean. Invert:. If true, inverts output.

Audio Bus: Audio Bus Object Reference. Audio Bus:. AudioBus to follow amplitude of and generate modulation control signal from..

Gain: Float (single-precision). Gain:. Gain to apply to amplitude signal..

Attack Time: Float (single-precision). Attack Time:. Attack time of envelope response (in sec).

Release Time: Float (single-precision). Release Time:. Release time of envelope response (in sec).

