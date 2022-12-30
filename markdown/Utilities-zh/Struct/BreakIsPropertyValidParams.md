# BreakIsPropertyValidParams

添加一个节点，将'IsPropertyValidParams'分解到其成员字段中。

## 图示

![]($-20221218-14385196.png)

## Inputs

Is Property Valid Params:是否属性有效参数结构（通过参考）。  

## Outputs

快照演员。Actor Object Reference.Snapshot Actor:.保存在快照中的演员。

级演员。Actor Object Reference.Level Actor:。相当于LevelActor:的演员，它存在于世界中。

快照属性容器。属性容器处理结构。快照属性容器：。用于传递给FProperty::ContainerPtrToValuePtr。这要么是SnapshotActor或其子对象。

等级属性容器。属性容器处理结构。级属性容器：。用于传递给FProperty::ContainerPtrToValuePtr。这要么是LevelPropertyContainers，要么是其子对象。

财产。物业参考.属性：。我们可能想要回滚的属性。

属性路径。字符串的阵列。属性路径：。每个元素都是通往此属性的子对象名称。最后一个元素是属性名称。第一个元素是一个组件的名称或根演员中的一个结构/子对象。例子：。MyCustomComponent -> MyCustomStructPropertyName -> PropertyName。MyCustomComponent -> MyCustomStructPropertyName。StructPropertyNameInActor -> PropertyName.
