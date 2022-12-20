# MakeNoise

Trigger a noise caused by a given Pawn, at a given location.. Note that the NoiseInstigator Pawn MUST have a PawnNoiseEmitterComponent for the noise to be detected by a PawnSensingComponent.. Senders of MakeNoise should have an Instigator if they are not pawns, or pass a NoiseInstigator.

Target is Actor

## 图示

![]($-20221218-17470090.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Loudness: Float (single-precision). The relative loudness of this noise. Usual range is 0 (no noise) to 1 (full volume). If MaxRange is used, this scales the max range, otherwise it affects the hearing range specified by the sensor..

Noise Instigator: Pawn Object Reference. Pawn responsible for this noise. Uses the actor's Instigator if NoiseInstigator is null.

Noise Location: Vector. Position of noise source. If zero vector, use the actor's location..

Max Range: Float (single-precision). Max range at which the sound may be heard. A value of 0 indicates no max range (though perception may have its own range). Loudness scales the range. (Note: not supported for legacy PawnSensingComponent, only for AIPerception).

Tag: Name. Identifier for the noise..  

## Outputs

Out: Exec.

