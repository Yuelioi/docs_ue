# SetUseAutoManageAttachment

设置我们是否应该在激活时自动附加到AutoAttachParent上，并在完成时从我们的父体上分离。这覆盖了激活时可能存在的任何当前附件（如果AutoAttachParent是空的，则将初始附件推迟到激活）。启用后，无论AutoAttachParent是否被分配，都会发生分离，并恢复激活时的相对转换。这也是在专用服务器上禁用附件，即使bAutoActivate为真，我们也不会实际激活。见。SetAutoAttachmentParameters()

目标是FXSystem组件

## 图示

![]($-20221218-18550409.png)

## Inputs

在。执行。

目标。FXSystem组件对象参考。

自动管理。布尔值。

## Outputs

出：执行。