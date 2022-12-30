# AttachActorToComponent

Attaches the RootComponent of this Actor to the supplied component, optionally at a named socket. It is not valid to call this on components that are not Registered.

Target is Actor

## 图示

![]($-20221218-21144112.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Parent: Scene Component Object Reference. Parent to attach to..

Socket Name: Name. Optional socket to attach to on the parent..

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..  

## Outputs

Out: Exec.

