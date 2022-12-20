# GetAttachParentActor

Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr

Target is Actor

## 图示

![]($-20221218-17343694.png)

## Inputs

Target: Actor Object Reference.  

## Outputs

Return Value: Actor Object Reference. Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr.

