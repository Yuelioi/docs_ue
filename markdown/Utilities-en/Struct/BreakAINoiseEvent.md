# BreakAINoiseEvent

Adds a node that breaks a 'AINoiseEvent' into its member fields

## 图示

![]($-20221218-14304608.png)

## Inputs

AINoise Event: AINoise Event Structure (by ref).  

## Outputs

Noise Location: Vector. Noise Location:. if not set Instigator's location will be used.

Loudness: Float (single-precision). Loudness:. Loudness modifier of the sound.. If MaxRange is non-zero, this modifies the range (by multiplication).. If there is no MaxRange, then if Square(DistanceToSound) <= Square(HearingRange) * Loudness, the sound is heard, false otherwise..

Max Range: Float (single-precision). Max Range:. Max range at which the sound can be heard. Multiplied by Loudness.. A value of 0 indicates that there is no range limit, though listeners are still limited by their own hearing range..

Instigator: Actor Object Reference. Instigator:. Actor triggering the sound..

Tag: Name. Tag:. Named identifier for the noise..

