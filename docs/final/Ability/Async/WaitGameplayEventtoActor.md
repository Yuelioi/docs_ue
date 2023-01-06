# WaitGameplayEventtoActor

等待指定的游戏标记事件在目标能力系统组件上被触发。只要OnlyTriggerOnce = false，它就会一直监听。如果OnlyMatchExact = false，它将对嵌套标签进行触发。

目标是能力异步等待游戏事件

## 图示

![]($-20221218-17300885.png)

## Inputs

在。执行。

目标演员。Actor Object Reference.

事件标签。Gameplay Tag结构。

Only Trigger Once：布尔值。

只有精确匹配。布尔值。 

## Outputs

输出。执行：执行。

Async Action: Ability Async Wait Gameplay Event Object Reference.

Event Received: 执行。收到的事件。

有效载荷。游戏事件数据结构。

Wait until the specified gameplay tag event is triggered on a target ability system component. It will keep listening as long as OnlyTriggerOnce = false. If OnlyMatchExact = false it will trigger for nested tags

Target is Ability Async Wait Gameplay Event

## 图示

![]($-20221218-17300885.png)

## Inputs

In: Exec.

Target Actor: Actor Object Reference.

Event Tag: Gameplay Tag Structure.

Only Trigger Once: Boolean.

Only Match Exact: Boolean.  

## Outputs

Out: Exec.

Async Action: Ability Async Wait Gameplay Event Object Reference.

Event Received: Exec. Event Received.

Payload: Gameplay Event Data Structure.

