# MakeSingleAnimationPlayData

Adds a node that create a 'SingleAnimationPlayData' from its members

## 图示

![]($-20221218-15011575.png)

## Inputs

Anim To Play: Animation Asset Object Reference. Anim to Play:. @todo in the future, we should make this one UObject. and have detail customization to display different things. The default sequence to play on this skeletal mesh.

Looping: Boolean. Saved Looping:. Default setting for looping for SequenceToPlay. This is not current state of looping..

Playing: Boolean. Saved Playing:. Default setting for playing for SequenceToPlay. This is not current state of playing..

Initial Position: Float (single-precision). Saved Position:. Default setting for position of SequenceToPlay to play..

Play Rate: Float (single-precision). Saved Play Rate:. Default setting for play rate of SequenceToPlay to play..  

## Outputs

Single Animation Play Data: Single Animation Play Data Structure.

