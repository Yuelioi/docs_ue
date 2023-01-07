# GetAttachParentActor

从 RootComponent 开始沿着附件链向上走，直到我们遇到一个不同的 actor，并返回它。如果我们没有连接到不同角色中的组件，则返回 nullptr。

目标是角色

## 图示

![](/uploads/projects/ue-bluprint/20221218-17343694.png)

## Inputs

目标。Actor 对象参考。

## Outputs

返回值。Actor 对象参考。从 RootComponent 开始沿着附件链向上走，直到我们遇到一个不同的角色，并返回它。如果我们没有连接到一个不同的角色中的组件，则返回 nullptr。

<hr>

Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-17343694.png)

## Inputs

Target: Actor Object Reference.

## Outputs

Return Value: Actor Object Reference. Walk up the attachment chain from RootComponent until we encounter a different actor, and return it. If we are not attached to a component in a different actor, returns nullptr.
