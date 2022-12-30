# MakeAnimNotifyEvent

添加一个节点，从其成员中创建一个'AnimNotifyEvent'。

## 图示

![]($-20221218-14465392.png)

## Inputs

触发权重阈值。Float（单精度）。触发权重阈值。

通知。Anim Notify Object Reference.通知。

通知状态类。Anim Notify State Object Reference.通知状态类。

蒙太奇Tick类型。EMontageNotifyTickType枚举。Montage Tick Type.

通知触发的机会。Float（单精度）。Notify Trigger Chance:.定义该通知触发的机会，0=没有机会，1=总是触发。

通知过滤器类型。ENotifyFilterType枚举。通知过滤类型：。定义了一种过滤通知的方法（阻止它们触发），例如，通过查看网格的当前LOD。

Notify Filter LOD: 整数。Notify Filter LOD:.从LOD开始过滤这个通知。

在专用服务器上触发。布尔型。专用服务器上的触发器：。如果禁用，该通知将在专用服务器上被跳过。

触发追随者：布尔值。在追随者身上触发：。如果启用，当动画是同步组中的追随者时，该通知将被触发（默认情况下，只有同步组的领导通知被触发。  

## Outputs

Anim Notify Event:Anim Notify Event 结构.
