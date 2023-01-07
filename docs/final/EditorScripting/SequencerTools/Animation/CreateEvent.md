# CreateEvent

从先前创建的蓝图端点和一个有效载荷创建一个事件。所产生的事件应该只被添加到作为参数的部分的通道中。

目标是 Sequencer Tools 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521140.png)

## Inputs

在。执行。

在序列中。电影场景序列对象参考。持有事件轨道的主水平序列，所产生的事件应被添加到该序列中。

在科。电影场景事件部分基本对象参考。主序列的事件轨道的部分。

在端点。定序器快速绑定结果结构（通过引用）。以前创建的端点...

在有效载荷中。字符串的数组。作为有效载荷传递给事件的值，计数必须与有效载荷中变量名称的数字相匹配。

## Outputs

出：执行。

返回值。电影场景事件结构。创建的电影事件。

<hr>

Create an event from a previously created blueprint endpoint and a payload. The resulting event should be added only. to a channel of the section that was given as a parameter.

Target is Sequencer Tools Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521140.png)

## Inputs

In: Exec.

In Sequence: Movie Scene Sequence Object Reference. Main level sequence that holds the event track and to which the resulting event should be added..

In Section: Movie Scene Event Section Base Object Reference. Section of the event track of the main sequence..

In Endpoint: Sequencer Quick Binding Result Structure (by ref). Previously created endpoint..

In Payload: Array of Strings. Values passed as payload to event, count must match the numbers of payload variable names in.

## Outputs

Out: Exec.

Return Value: Movie Scene Event Structure. The created movie event..
