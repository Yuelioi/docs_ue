# SetUseAutoManageAttachment

Sets whether we should automatically attach to AutoAttachParent when activated, and detach from our parent when completed.. This overrides any current attachment that may be present at the time of activation (deferring initial attachment until activation, if AutoAttachParent is null).. When enabled, detachment occurs regardless of whether AutoAttachParent is assigned, and the relative transform from the time of activation is restored.. This also disables attachment on dedicated servers, where we don't actually activate even if bAutoActivate is true.. See: SetAutoAttachmentParameters()

Target is FXSystem Component

## 图示

![]($-20221218-18550409.png)

## Inputs

In: Exec.

Target: FXSystem Component Object Reference.

Auto Manage: Boolean.  

## Outputs

Out: Exec.

