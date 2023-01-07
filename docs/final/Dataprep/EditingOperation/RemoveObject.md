# RemoveObject

从 Dataprep 的和/或行动的工作集中删除一个对象

目标是 Dataprep 编辑操作

## 图示

![](/uploads/projects/ue-bluprint/20221218-18353906.png)

## Inputs

在。执行。

目标。Dataprep Editing Operation 对象参考。

对象。Object Reference. 要从工作集中删除的对象。

Local Context: 布尔值。如果设置为 "true"，对象将从当前工作集中移除。该对象将不会被任何使用当前上下文的后续操作所访问。如果设置为 false，该对象将从 Dataprep 的工作集中移除。该对象将不会被 Dataprep 的管道中的任何后续操作所访问。

## Outputs

输出。执行：执行。

<hr>

Remove an object from the Dataprep's and/or action's working set

Target is Dataprep Editing Operation

## 图示

![](/uploads/projects/ue-bluprint/20221218-18353906.png)

## Inputs

In: Exec.

Target: Dataprep Editing Operation Object Reference.

Object: Object Reference. Object to be removed from the working set.

Local Context: Boolean. If set to true, the object is removed from the current working set. The object will not be accessible to any subsequent operation using the current context. If set to false, the object is removed from the Dataprep's working set. The object will not be accessible to any subsequent operation in the Dataprep's pipeline..

## Outputs

Out: Exec.
