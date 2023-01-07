# RemoveActorfromLayer

从指定的层中移除一个演员。

目标是分层子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-19375765.png)

## Inputs

在。执行。

目标。分层子系统对象参考。

演员。演员对象参考。要从提供的图层中移除的角色。

要删除的层。名称（通过引用）。要删除演员的层的名称。

更新统计资料。布尔型。

## Outputs

出：执行。

返回值。布尔值。如果该演员被从该层移除，则为 true。如果该演员已经属于该层，则返回 false。

<hr>

Removes an actor from the specified layer.

Target is Layers Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-19375765.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Actor: Actor Object Reference. The actor to remove from the provided layer.

Layer to Remove: Name (by ref). The name of the layer to remove the actor from.

Update Stats: Boolean.

## Outputs

Out: Exec.

Return Value: Boolean. true if the actor was removed from the layer. false is returned if the actor already belonged to the layer..
