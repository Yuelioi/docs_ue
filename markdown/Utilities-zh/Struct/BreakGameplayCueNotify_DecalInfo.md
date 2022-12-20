# BreakGameplayCueNotify_DecalInfo

Adds a node that breaks a 'GameplayCueNotify_DecalInfo' into its member fields

## 图示

![]($-20221218-14363039.png)

## Inputs

Gameplay Cue Notify Decal Info: Gameplay Cue Notify Decal Info Structure (by ref).  

## Outputs

Spawn Condition Override: Gameplay Cue Notify Spawn Condition Structure. Spawn Condition Override:. Condition to check before spawning the decal..

Placement Info Override: Gameplay Cue Notify Placement Info Structure. Placement Info Override:. Defines how the decal will be placed..

Decal Material: Material Interface Object Reference. Decal Material:. Decal material to spawn..

Decal Size: Vector. Decal Size:. Decal size in local space (does not include the component scale)..

Override Spawn Condition: Boolean. Override Spawn Condition:. If enabled, use the spawn condition override and not the default one..

Override Placement Info: Boolean. Override Placement Info:. If enabled, use the placement info override and not the default one..

Override Fade Out: Boolean. Override Fade Out:. If enabled, override default decal actor fade out values..

Fade Out Start Delay: Float (single-precision). Fade Out Start Delay:. Sets when the decal actor will start fading out. Will override setting in class..

Fade Out Duration: Float (single-precision). Fade Out Duration:. Sets how long it takes for decal actor to fade out. Will override setting in class..

