# GetAttachParentSocketName

从 RootComponent 开始沿着附件链向上走，直到我们遇到一个不同的 actor，并返回该组件中的 socket 名称。如果我们没有连接到不同角色中的组件，则返回 NAME_NONE。

目标是 actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-17343814.png)

## Inputs

目标。Actor 对象参考。

## Outputs

返回值。名称。从 RootComponent 开始沿着附件链向上走，直到我们遇到一个不同的 actor，并返回该组件中的 socket 名称。如果我们没有附加到不同角色中的组件，则返回 NAME_NONE。

<hr>

Walk up the attachment chain from RootComponent until we encounter a different actor, and return the socket name in the component. If we are not attached to a component in a different actor, returns NAME_None

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-17343814.png)

## Inputs

Target: Actor Object Reference.

## Outputs

Return Value: Name. Walk up the attachment chain from RootComponent until we encounter a different actor, and return the socket name in the component. If we are not attached to a component in a different actor, returns NAME_None.
