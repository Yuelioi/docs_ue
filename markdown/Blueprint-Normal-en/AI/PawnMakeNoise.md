# PawnMakeNoise

Inform AIControllers that you've made a noise they might hear (they are sent a HearNoise message if they have bHearNoises==true). The instigator of this sound is the pawn which is used to call MakeNoise.

Target is Pawn

## 图示

![]($-20221218-17480144.png)

## Inputs

In: Exec.

Target: Pawn Object Reference.

Loudness: Float (single-precision). is the relative loudness of this noise (range 0.0 to 1.0). Directly affects the hearing range specified by the AI's HearingThreshold..

Noise Location: Vector. Position of noise source. If zero vector, use the actor's location..

Use Noise Maker Location: Boolean. If true, use the location of the NoiseMaker rather than NoiseLocation. If false, use NoiseLocation..

Noise Maker: Actor Object Reference. Which actor is the source of the noise. Not to be confused with the Noise Instigator, which is responsible for the noise (and is the pawn on which this function is called). If not specified, the pawn instigating the noise will be used as the NoiseMaker.  

## Outputs

Out: Exec.

