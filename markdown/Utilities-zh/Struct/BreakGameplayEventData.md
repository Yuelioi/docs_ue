# BreakGameplayEventData

添加一个节点，将 "GameplayEventData "分解成其成员字段。

## 图示

![]($-20221218-14364111.png)

## 输入

Gameplay Event Data: Gameplay Event Data Structure (by ref).  

## 输出

事件标签。Gameplay Tag结构。Event Tag:. 触发该事件的标签。

引导者。演员对象参考。指导者：。事件的发起者。

目标。Actor Object Reference。目标:. 事件的目标。

可选的对象。对象参考。可选对象:. 一个可选的特定能力对象，通过事件传递。

可选对象2：对象参考。可选对象2:. 第二个可选的特定能力对象，通过事件传递。

Context Handle。Gameplay Effect Context Handle结构。Context Handle:。多态的上下文信息。

Instigator Tags: Gameplay Tag Container结构。指导者标签：。教唆者拥有的标签。

目标标签。游戏标签容器结构。目标标签：。目标拥有的标签。

事件幅度。浮点数（单精度）。事件幅度：。触发事件的量级。

目标数据。Gameplay Ability目标数据处理结构。目标数据：。事件的多态目标信息。
