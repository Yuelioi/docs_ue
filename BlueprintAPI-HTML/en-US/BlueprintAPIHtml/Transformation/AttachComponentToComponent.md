# AttachComponentToComponent

Attach this component to another scene component, optionally at a named socket. It is valid to call this on components whether or not they have been Registered.

Target is Scene Component

## 图示

![]($-20221218-21144228.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Parent: Scene Component Object Reference. Parent to attach to..

Socket Name: Name. Optional socket to attach to on the parent..

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..  

## Outputs

Out: Exec.

Return Value: Boolean. True if attachment is successful (or already attached to requested parent/socket), false if attachment is rejected and there is no change in AttachParent..

