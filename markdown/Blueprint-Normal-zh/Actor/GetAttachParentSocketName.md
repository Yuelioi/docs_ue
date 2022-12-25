# GetAttachParentSocketName

从RootComponent开始沿着附件链向上走，直到我们遇到一个不同的actor，并返回该组件中的socket名称。如果我们没有连接到不同角色中的组件，则返回NAME_NONE。

目标是actor

## 图示

![]($-20221218-17343814.png)

## Inputs

目标。Actor对象参考。 

## Outputs

返回值。名称。从RootComponent开始沿着附件链向上走，直到我们遇到一个不同的actor，并返回该组件中的socket名称。如果我们没有附加到不同角色中的组件，则返回NAME_NONE。
