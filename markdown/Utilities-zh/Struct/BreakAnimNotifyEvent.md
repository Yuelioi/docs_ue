# BreakAnimNotifyEvent

Adds a node that breaks a 'AnimNotifyEvent' into its member fields

## 图示

![]($-20221218-14310178.png)

## Inputs

Anim Notify Event: Anim Notify Event Structure (by ref).  

## Outputs

Trigger Weight Threshold: Float (single-precision). Trigger Weight Threshold.

Notify Name: Name. Notify Name.

Notify: Anim Notify Object Reference. Notify.

Notify State Class: Anim Notify State Object Reference. Notify State Class.

Montage Tick Type: EMontageNotifyTickType Enum. Montage Tick Type.

Notify Trigger Chance: Float (single-precision). Notify Trigger Chance:. Defines the chance of of this notify triggering, 0 = No Chance, 1 = Always triggers.

Notify Filter Type: ENotifyFilterType Enum. Notify Filter Type:. Defines a method for filtering notifies (stopping them triggering) e.g. by looking at the meshes current LOD.

Notify Filter LOD: Integer. Notify Filter LOD:. LOD to start filtering this notify from..

Trigger On Dedicated Server: Boolean. Trigger on Dedicated Server:. If disabled this notify will be skipped on dedicated servers.

Trigger On Follower: Boolean. Trigger on Follower:. If enabled this notify will trigger when the animation is a follower in a sync group (by default only the sync group leaders notifies trigger.

