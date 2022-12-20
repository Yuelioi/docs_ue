# BreakGameplayCueNotify_CameraLen-

Adds a node that breaks a 'GameplayCueNotify_CameraLensEffectInfo' into its member fields

## 图示

![]($-20221218-14362864.png)

## Inputs

Gameplay Cue Notify Camera Lens Effect Info: Gameplay Cue Notify Camera Lens Effect Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before playing the camera lens effect..

Placement Info Override: Gameplay Cue Notify Placement Info Structure. Placement Info Override:. Defines how the camera lens effect will be placed..

Camera Lens Effect: Actor Class Reference. Camera Lens Effect:. Camera lens effect to play..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

Override Placement Info: Boolean. Override Placement Info:. If enabled, use the placement info override and not the default one..

Play In World: Boolean. Play in World:. If enabled, the camera lens effect will be played in the world and affect all players..

World Inner Radius: Float (single-precision). World Inner Radius:. Players inside this radius get the full intensity camera lens effect..

World Outer Radius: Float (single-precision). World Outer Radius:. Players outside this radius do not get the camera lens effect applied..

