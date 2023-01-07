# WaitGameplayEvent

等到指定的游戏标签事件被触发。默认情况下，这将查看该能力的所有者。可以设置 OptionalExternalTarget 来使其查看另一个角色的标签变化。只要 OnlyTriggerOnce = false，它就会一直监听。如果 OnlyMatchExact = false，它将对嵌套标签进行触发。

目标是能力任务等待游戏事件

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334726.png)

## Inputs

在。Exec.

事件标签。Gameplay 标签结构。

可选的外部目标。演员对象参考。

Only Trigger Once：布尔值。

只有精确匹配。布尔值。

## Outputs

输出。执行：执行。

Async Task: Ability Task Wait Gameplay Event Object Reference.

Event Received: Exec. 收到的事件。

有效载荷。游戏事件数据结构。

<hr>

Wait until the specified gameplay tag event is triggered. By default this will look at the owner of this ability. OptionalExternalTarget can be set to make this look at another actor's tags for changes. It will keep listening as long as OnlyTriggerOnce = false. If OnlyMatchExact = false it will trigger for nested tags

Target is Ability Task Wait Gameplay Event

## 图示

![](/uploads/projects/ue-bluprint/20221218-17334726.png)

## Inputs

In: Exec.

Event Tag: Gameplay Tag Structure.

Optional External Target: Actor Object Reference.

Only Trigger Once: Boolean.

Only Match Exact: Boolean.

## Outputs

Out: Exec.

Async Task: Ability Task Wait Gameplay Event Object Reference.

Event Received: Exec. Event Received.

Payload: Gameplay Event Data Structure.
