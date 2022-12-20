# MakeEnvelopeFollowerGeneratorPar-

Adds a node that create a 'EnvelopeFollowerGeneratorParams' from its members

## 图示

![]($-20221218-14522883.png)

## Inputs

Bypass: Boolean. Bypass:. If true, bypasses generator from being modulated by parameters, patches, or mixed (remains active and computed)..

Invert: Boolean. Invert:. If true, inverts output.

Audio Bus: Audio Bus Object Reference. Audio Bus:. AudioBus to follow amplitude of and generate modulation control signal from..

Gain: Float (single-precision). Gain:. Gain to apply to amplitude signal..

Attack Time: Float (single-precision). Attack Time:. Attack time of envelope response (in sec).

Release Time: Float (single-precision). Release Time:. Release time of envelope response (in sec).  

## Outputs

Envelope Follower Generator Params: Envelope Follower Generator Params Structure.

