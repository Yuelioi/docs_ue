# BreakGameplayCueNotify_SoundInfo

Adds a node that breaks a 'GameplayCueNotify_SoundInfo' into its member fields

## 图示

![]($-20221218-14363502.png)

## Inputs

Gameplay Cue Notify Sound Info: Gameplay Cue Notify Sound Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before playing the sound..

Placement Info Override: Gameplay Cue Notify Placement Info Structure. Placement Info Override:. Defines how the sound will be placed..

Sound: Sound Base Object Reference. Sound:. Sound to play..

Looping Fade Out Duration: Float (single-precision). Looping Fade Out Duration:. How long it should take to fade out. Only used on looping gameplay cues..

Looping Fade Volume Level: Float (single-precision). Looping Fade Volume Level:. The volume level you want the sound to fade out to over the 'Looping Fade Out Duration' before stopping.. This value is irrelevant if the 'Looping Fade Out Duration' is zero.. NOTE: If the fade out duration is positive and this value is not lower than the volume the sound is playing at, the sound will never stop!.

Sound Parameter Interface Info: Gameplay Cue Notify Sound Parameter Interface Info Structure. Sound Parameter Interface Info:. Defines how to interface with the sound..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

Override Placement Info: Boolean. Override Placement Info:. If enabled, use the placement info override and not the default one..

Use Sound Parameter Interface: Boolean. Use Sound Parameter Interface:. If enabled, use the placement info override and not the default one..

