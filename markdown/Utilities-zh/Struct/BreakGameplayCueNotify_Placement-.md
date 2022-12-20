# BreakGameplayCueNotify_Placement-

Adds a node that breaks a 'GameplayCueNotify_PlacementInfo' into its member fields

## 图示

![]($-20221218-14363413.png)

## Inputs

Gameplay Cue Notify Placement Info: Gameplay Cue Notify Placement Info Structure (by ref).  

## Outputs

Socket Name: Name. Socket Name:. Target's socket (or bone) used for location and rotation. If "None", it uses the target's root..

Attach Policy: EGameplayCueNotify_AttachPolicy Enum. Attach Policy:. Whether to attach to the target actor or not attach..

Attachment Rule: EAttachmentRule Enum. Attachment Rule:. How the transform is handled when attached..

Override Rotation: Boolean. Override Rotation:. If enabled, will always spawn using rotation override..

Override Scale: Boolean. Override Scale:. If enabled, will always spawn using the scale override..

Rotation Override: Rotator. Rotation Override:. If enabled, will always spawn using rotation override.. This will also set the rotation to be absolute, so any changes to the parent's rotation will be ignored after attachment..

Scale Override: Vector. Scale Override:. If enabled, will always spawn using scale override.. This will also set the scale to be absolute, so any changes to the parent's scale will be ignored after attachment..

