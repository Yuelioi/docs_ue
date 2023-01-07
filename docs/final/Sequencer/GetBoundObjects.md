# GetBoundObjects

解决这个子序列中与指定 ID 相关的绑定。注意：:ObjectBinding 应该从与这个 Sequence Director 拥有的 Sequence 相同的序列中构建（见 GetSequenceBinding 节点）。

目标是水平序列主任

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482733.png)

## Inputs

在。执行。

目标。水平序列主任对象参考。

对象绑定。电影场景对象绑定的 ID 结构。这个子序列内的对象绑定的 ID，或者它的一个子序列来解决。

## Outputs

出：执行。

返回值。对象引用的数组。

<hr>

Resolve the bindings inside this sub-sequence that relate to the specified ID. Note:: ObjectBinding should be constructed from the same sequence as this Sequence Director's owning Sequence (see the GetSequenceBinding node)

Target is Level Sequence Director

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482733.png)

## Inputs

In: Exec.

Target: Level Sequence Director Object Reference.

Object Binding: Movie Scene Object Binding ID Structure. The ID for the object binding inside this sub-sequence or one of its children to resolve.

## Outputs

Out: Exec.

Return Value: Array of Object References.
