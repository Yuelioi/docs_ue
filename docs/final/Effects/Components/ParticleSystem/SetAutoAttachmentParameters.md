# SetAutoAttachmentParameters

设置 AutoAttachParent、AutoAttachSocketName、AutoAttachLocationRule、AutoAttachRotationRule、AutoAttachScaleRule 为指定参数。不改变 bAutoManageAttachment；这必须单独设置。

目标是 FXSystem 组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18544435.png)

## Inputs

在。执行。

目标。FXSystem 组件对象参考。

父级：场景组件对象参考。要连接的组件。

插座名称。名称。母体上的插座要附加到...

位置规则。EAttachmentRule 枚举。当我们附加到父母身上时，我们如何处理我们的位置的选项...

旋转规则。EAttachmentRule 枚举。当我们附加到父母身上时，我们如何处理我们的旋转的选项。

规模规则。EAttachmentRule 枚举。当我们附加到父母身上时，我们如何处理我们的比例的选项。

## Outputs

出：执行。

<hr>

Set AutoAttachParent, AutoAttachSocketName, AutoAttachLocationRule, AutoAttachRotationRule, AutoAttachScaleRule to the specified parameters. Does not change bAutoManageAttachment; that must be set separately.

Target is FXSystem Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18544435.png)

## Inputs

In: Exec.

Target: FXSystem Component Object Reference.

Parent: Scene Component Object Reference. Component to attach to..

Socket Name: Name. Socket on Parent to attach to..

Location Rule: EAttachmentRule Enum. Option for how we handle our location when we attach to Parent..

Rotation Rule: EAttachmentRule Enum. Option for how we handle our rotation when we attach to Parent..

Scale Rule: EAttachmentRule Enum. Option for how we handle our scale when we attach to Parent..

## Outputs

Out: Exec.
