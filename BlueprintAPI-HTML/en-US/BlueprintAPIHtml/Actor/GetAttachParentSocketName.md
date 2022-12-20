# GetAttachParentSocketName

Walk up the attachment chain from RootComponent until we encounter a different actor, and return the socket name in the component. If we are not attached to a component in a different actor, returns NAME_None

Target is Actor

## 图示

![]($-20221218-17343814.png)

## Inputs

Target: Actor Object Reference.  

## Outputs

Return Value: Name. Walk up the attachment chain from RootComponent until we encounter a different actor, and return the socket name in the component. If we are not attached to a component in a different actor, returns NAME_None.

