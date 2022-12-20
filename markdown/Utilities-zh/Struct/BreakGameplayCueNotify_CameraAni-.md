# BreakGameplayCueNotify_CameraAni-

Adds a node that breaks a 'GameplayCueNotify_CameraAnimInfo' into its member fields

## 图示

![]($-20221218-14362775.png)

## Inputs

Gameplay Cue Notify Camera Anim Info: Gameplay Cue Notify Camera Anim Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before playing the camera animation..

Camera Anim: Camera Anim Object Reference. Camera Anim:. Camera animation to play..

Anim Scale: Float (single-precision). Anim Scale:. Scale applied to the camera animation..

Play Rate: Float (single-precision). Play Rate:. Rate to play the camera animation at..

Blend In Time: Float (single-precision). Blend in Time:. Time (in seconds) used to blend in the camera animation..

Blend Out Time: Float (single-precision). Blend Out Time:. Time (in seconds) used to blend out the camera animation..

Play Space: EGameplayCueNotify_EffectPlaySpace Enum. Play Space:. What coordinate space to play the camera animation relative to..

Is Looping: Boolean. Is Looping:. If enabled, the camera animation will be set to loop..

Random Start Time: Boolean. Random Start Time:. If enabled, the camera animation will start at a random time. Only used when looping..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

