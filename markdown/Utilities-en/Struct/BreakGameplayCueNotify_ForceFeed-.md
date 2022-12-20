# BreakGameplayCueNotify_ForceFeed-

Adds a node that breaks a 'GameplayCueNotify_ForceFeedbackInfo' into its member fields

## 图示

![]($-20221218-14363148.png)

## Inputs

Gameplay Cue Notify Force Feedback Info: Gameplay Cue Notify Force Feedback Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before playing the force feedback..

Placement Info Override: Gameplay Cue Notify Placement Info Structure. Placement Info Override:. Defines how the force feedback will be placed..

Force Feedback Effect: Force Feedback Effect Object Reference. Force Feedback Effect:. Force feedback effect to play..

Force Feedback Tag: Name. Force Feedback Tag:. Tag used to identify the force feedback effect so it can later be canceled.. Warning: If this is "None" it will stop ALL force feedback effects if it is canceled..

Is Looping: Boolean. Is Looping:. If enabled, the force feedback will be set to loop..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

Override Placement Info: Boolean. Override Placement Info:. If enabled, use the placement info override and not the default one..

Play In World: Boolean. Play in World:. If enabled, the force feedback will be played in the world and affect all players..

World Intensity: Float (single-precision). World Intensity:. Multiplier applied to the force feedback when played in world..

World Attenuation: Force Feedback Attenuation Object Reference. World Attenuation:. How the force feedback is attenuated over distance when played in world..

