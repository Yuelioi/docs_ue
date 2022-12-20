# BreakActorPerceptionUpdateInfo

Adds a node that breaks a 'ActorPerceptionUpdateInfo' into its member fields

## 图示

![]($-20221218-14304079.png)

## Inputs

Actor Perception Update Info: Sensed Actor's Update Data Structure (by ref).  

## Outputs

Target Id: Integer. Target Id:. Id of to the stimulus source.

Target: Actor Weak object. Target:. Actor associated to the stimulus (can be null).

Stimulus: AIStimulus Structure. Stimulus:. Updated stimulus.

