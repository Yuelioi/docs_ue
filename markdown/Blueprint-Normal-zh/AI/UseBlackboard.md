# UseBlackboard

让AI使用指定的黑板资产，如果不存在黑板组件，则创建一个黑板组件。

目标是AIController

## 图示

![]($-20221218-17484731.png)

## Inputs

在。执行。

目标。AIController对象参考。

Blackboard资产：Blackboard数据对象参考。要使用的Blackboard资产。 

## Outputs

输出。Exec.

Blackboard Component: Blackboard Component Object Reference。使用或创建的黑板组件，与传入的黑板资产一起工作。

返回值。布尔值。如果我们成功地将黑板资产链接到黑板组件，则为真。
