# SetAutoAttachmentParameters

设置AutoAttachParent、AutoAttachSocketName、AutoAttachLocationRule、AutoAttachRotationRule、AutoAttachScaleRule为指定参数。不改变bAutoManageAttachment；这必须单独设置。

目标是FXSystem组件

## 图示

![]($-20221218-18544435.png)

## Inputs

在。执行。

目标。FXSystem组件对象参考。

父级：场景组件对象参考。要连接的组件。

插座名称。名称。母体上的插座要附加到...

位置规则。EAttachmentRule枚举。当我们附加到父母身上时，我们如何处理我们的位置的选项...

旋转规则。EAttachmentRule枚举。当我们附加到父母身上时，我们如何处理我们的旋转的选项。

规模规则。EAttachmentRule枚举。当我们附加到父母身上时，我们如何处理我们的比例的选项。

## Outputs

出：执行。