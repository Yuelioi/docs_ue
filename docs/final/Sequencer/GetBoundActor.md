# GetBoundActor

解决这个子序列中与指定 ID 相关的第一个有效的 Actor 绑定。注意：:ObjectBinding 应该从与这个序列主管拥有的序列相同的序列中构建（见 GetSequenceBinding 节点）。

目标是水平序列主任

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482365.png)

## Inputs

在。执行。

目标。水平序列主任对象参考。

对象绑定。电影场景对象绑定的 ID 结构。这个子序列内的对象绑定的 ID，或者它的一个子序列来解决。

## Outputs

出：执行。

返回值。演员对象参考。

<hr>

Resolve the first valid Actor binding inside this sub-sequence that relates to the specified ID. Note:: ObjectBinding should be constructed from the same sequence as this Sequence Director's owning Sequence (see the GetSequenceBinding node)

Target is Level Sequence Director

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482365.png)

## Inputs

In: Exec.

Target: Level Sequence Director Object Reference.

Object Binding: Movie Scene Object Binding ID Structure. The ID for the object binding inside this sub-sequence or one of its children to resolve.

## Outputs

Out: Exec.

Return Value: Actor Object Reference.
