# FindEventGraph

查找给定蓝图的事件图。如果没有，则为空。这将只返回。蓝图的主要事件图（名为 "EventGraph "的图）。

目标是蓝图编辑器库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18114030.png)

## Inputs

在。执行。

蓝图。Blueprint Object Reference. 要搜索事件图的蓝图。

## Outputs

输出。执行。

返回值。Ed Graph 对象参考。UEdGraph\* 蓝图的事件图（如果它有的话），如果它没有的话则为空。

<hr>

Finds the event graph of the given blueprint. Null if it doesn't have one. This will only return. the primary event graph of the blueprint (the graph named "EventGraph").

Target is Blueprint Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18114030.png)

## Inputs

In: Exec.

Blueprint: Blueprint Object Reference. Blueprint to search for the event graph on.

## Outputs

Out: Exec.

Return Value: Ed Graph Object Reference. UEdGraph\* Event graph of the blueprint if it has one, null if it doesn't have one.
