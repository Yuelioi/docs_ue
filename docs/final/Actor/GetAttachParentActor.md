# GetAttachParentActor

从RootComponent开始沿着附件链向上走，直到我们遇到一个不同的actor，并返回它。如果我们没有连接到不同角色中的组件，则返回nullptr。

目标是角色

## 图示

![]($-20221218-17343694.png)

## Inputs

目标。Actor对象参考。 

## Outputs

返回值。Actor对象参考。从RootComponent开始沿着附件链向上走，直到我们遇到一个不同的角色，并返回它。如果我们没有连接到一个不同的角色中的组件，则返回nullptr。

Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr

Target is Actor

## 图示

![]($-20221218-17343694.png)

## Inputs

Target: Actor Object Reference.  

## Outputs

Return Value: Actor Object Reference. Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr.

