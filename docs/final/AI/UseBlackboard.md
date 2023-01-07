# UseBlackboard

让 AI 使用指定的黑板资产，如果不存在黑板组件，则创建一个黑板组件。

目标是 AIController

## 图示

![](/uploads/projects/ue-bluprint/20221218-17484731.png)

## Inputs

在。执行。

目标。AIController 对象参考。

Blackboard 资产：Blackboard 数据对象参考。要使用的 Blackboard 资产。

## Outputs

输出。Exec.

Blackboard Component: Blackboard Component Object Reference。使用或创建的黑板组件，与传入的黑板资产一起工作。

返回值。布尔值。如果我们成功地将黑板资产链接到黑板组件，则为真。

<hr>

Makes AI use the specified Blackboard asset & creates a Blackboard Component if one does not already exist.

Target is AIController

## 图示

![](/uploads/projects/ue-bluprint/20221218-17484731.png)

## Inputs

In: Exec.

Target: AIController Object Reference.

Blackboard Asset: Blackboard Data Object Reference. The Blackboard asset to use..

## Outputs

Out: Exec.

Blackboard Component: Blackboard Component Object Reference. The Blackboard component that was used or created to work with the passed-in Blackboard Asset..

Return Value: Boolean. true if we successfully linked the blackboard asset to the blackboard component..
