# BreakGameplayCueNotify_SpawnCond-

Adds a node that breaks a 'GameplayCueNotify_SpawnCondition' into its member fields

## 图示

![]($-20221218-14363676.png)

## Inputs

Gameplay Cue Notify Spawn Condition: Gameplay Cue Notify Spawn Condition Structure (by ref).  

## Outputs

Locally Controlled Source: EGameplayCueNotify_LocallyControlledSource Enum. Locally Controlled Source:. Source actor to use when determining if it is locally controlled..

Locally Controlled Policy: EGameplayCueNotify_LocallyControlledPolicy Enum. Locally Controlled Policy:. Locally controlled policy used to determine if the gameplay cue effects should spawn..

Chance To Play: Float (single-precision). Chance to Play:. Random chance to play the effects. (1.0 = always play, 0.0 = never play).

Allowed Surface Types: Array of EPhysicalSurface Enums. Allowed Surface Types:. The gameplay cue effects will only spawn if the surface type is in this list.. An empty list means everything is allowed..

Rejected Surface Types: Array of EPhysicalSurface Enums. Rejected Surface Types:. The gameplay cue effects will only spawn if the surface type is NOT in this list.. An empty list means nothing will be rejected..

