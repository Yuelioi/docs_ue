# LinkAnimClassLay-

运行所有的层节点，试图找到由指定的类实现的层节点，然后为每个类建立一个链接实例。分配一个链接实例来运行类中指定的每个组，所以状态是共享的。如果一个层没有被分组（即 NAME_NONE），那么状态就不会被共享，并且为每个层节点分配一个单独的链接实例。如果 InClass 是空的，那么所有层都被重置为默认状态。

目标是骨架网状结构组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18255902.png)

## Inputs

在。执行。

目标。Skeletal Mesh Component 对象参考。

在类中。动画实例类参考。

## Outputs

输出。执行。

<hr>

Runs through all layer nodes, attempting to find layer nodes that are implemented by the specified class, then sets up a linked instance of the class for each.. Allocates one linked instance to run each of the groups specified in the class, so state is shared. If a layer is not grouped (ie. NAME_None), then state is not shared. and a separate linked instance is allocated for each layer node.. If InClass is null, then all layers are reset to their defaults.

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18255902.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

In Class: Anim Instance Class Reference.

## Outputs

Out: Exec.
