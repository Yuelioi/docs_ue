# MakeSubmixEffectFilterSettings

Adds a node that create a 'SubmixEffectFilterSettings' from its members

## 图示

![]($-20221218-15024507.png)

## Inputs

Filter Type: ESubmixFilterType Enum. Filter Type:. What type of filter to use for the submix filter effect.

Filter Algorithm: ESubmixFilterAlgorithm Enum. Filter Algorithm:. What type of filter algorithm to use for the submix filter effect.

Filter Frequency: Float (single-precision). Filter Frequency:. The output filter cutoff frequency (hz) [0.0, 20000.0].

Filter Q: Float (single-precision). Filter Q:. The output filter resonance (Q) [0.5, 10].  

## Outputs

Submix Effect Filter Settings: Submix Effect Filter Settings Structure.

