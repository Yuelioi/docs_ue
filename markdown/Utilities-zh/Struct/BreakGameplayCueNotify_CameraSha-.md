# BreakGameplayCueNotify_CameraSha-

Adds a node that breaks a 'GameplayCueNotify_CameraShakeInfo' into its member fields

## 图示

![]($-20221218-14362952.png)

## Inputs

Gameplay Cue Notify Camera Shake Info: Gameplay Cue Notify Camera Shake Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before playing the camera shake..

Placement Info Override: Gameplay Cue Notify Placement Info Structure. Placement Info Override:. Defines how the camera shake will be placed..

Camera Shake: Camera Shake Base Class Reference. Camera Shake:. Camera shake to play..

Shake Scale: Float (single-precision). Shake Scale:. Scale applied to the camera shake..

Play Space: EGameplayCueNotify_EffectPlaySpace Enum. Play Space:. What coordinate space to play the camera shake relative to..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

Override Placement Info: Boolean. Override Placement Info:. If enabled, use the placement info override and not the default one..

Play In World: Boolean. Play in World:. If enabled, the camera shake will be played in the world and affect all players..

World Inner Radius: Float (single-precision). World Inner Radius:. Players inside this radius get the full intensity camera shake..

World Outer Radius: Float (single-precision). World Outer Radius:. Players outside this radius do not get the camera shake applied..

World Falloff Exponent: Float (single-precision). World Falloff Exponent:. Exponent that describes the shake intensity falloff curve between the inner and outer radii. (1.0 is linear).

