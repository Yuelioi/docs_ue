# SetAutoAttachmentParameters

Set AutoAttachParent, AutoAttachSocketName, AutoAttachLocationRule, AutoAttachRotationRule, AutoAttachScaleRule to the specified parameters. Does not change bAutoManageAttachment; that must be set separately.

Target is FXSystem Component

## 图示

![]($-20221218-18544435.png)

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

