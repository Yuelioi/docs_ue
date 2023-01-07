# SetUseAutoManageAttachment

设置我们是否应该在激活时自动附加到 AutoAttachParent 上，并在完成时从我们的父体上分离。这覆盖了激活时可能存在的任何当前附件（如果 AutoAttachParent 是空的，则将初始附件推迟到激活）。启用后，无论 AutoAttachParent 是否被分配，都会发生分离，并恢复激活时的相对转换。这也是在专用服务器上禁用附件，即使 bAutoActivate 为真，我们也不会实际激活。见。SetAutoAttachmentParameters()

目标是 FXSystem 组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18550409.png)

## Inputs

在。执行。

目标。FXSystem 组件对象参考。

自动管理。布尔值。

## Outputs

出：执行。

<hr>

Sets whether we should automatically attach to AutoAttachParent when activated, and detach from our parent when completed.. This overrides any current attachment that may be present at the time of activation (deferring initial attachment until activation, if AutoAttachParent is null).. When enabled, detachment occurs regardless of whether AutoAttachParent is assigned, and the relative transform from the time of activation is restored.. This also disables attachment on dedicated servers, where we don't actually activate even if bAutoActivate is true.. See: SetAutoAttachmentParameters()

Target is FXSystem Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18550409.png)

## Inputs

In: Exec.

Target: FXSystem Component Object Reference.

Auto Manage: Boolean.

## Outputs

Out: Exec.
