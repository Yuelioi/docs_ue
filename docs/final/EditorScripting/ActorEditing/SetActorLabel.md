# SetActorLabel

为这个角色分配一个新的标签。演员标签只在开发构建中可用。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-18464147.png)

## Inputs

在。执行。

目标。演员对象参考。

新的演员标签。字符串。要分配给演员的新标签字符串。如果是空的，该演员将有一个默认的标签。

标记脏。布尔值。如果为真，该演员的包将被标记为脏，以便保存。否则它将不会被标记。如果不允许变脏（比如在加载过程中），你应该为这个参数传递 false。

## Outputs

出：执行。

<hr>

Assigns a new label to this actor. Actor labels are only available in development builds.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-18464147.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

New Actor Label: String. The new label string to assign to the actor. If empty, the actor will have a default label..

Mark Dirty: Boolean. If true the actor's package will be marked dirty for saving. Otherwise it will not be. You should pass false for this parameter if dirtying is not allowed (like during loads).

## Outputs

Out: Exec.
