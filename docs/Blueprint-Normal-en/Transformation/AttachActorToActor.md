# AttachActorToActor

Attaches the RootComponent of this Actor to the supplied actor, optionally at a named socket.

Target is Actor

## 图示

![]($-20221218-21144001.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Parent Actor: Actor Object Reference. Actor to attach this actor's RootComponent to.

Socket Name: Name. Socket name to attach to, if any.

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..  

## Outputs

Out: Exec.

