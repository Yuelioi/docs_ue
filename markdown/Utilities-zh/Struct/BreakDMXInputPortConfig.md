# BreakDMXInputPortConfig

添加一个节点，将'DMXInputPortConfig'分解成其成员字段

## 图示

![]($-20221218-14352541.png)

## Inputs

DMXInput Port Config: DMX输入端口配置结构（通过引用）。 

## Outputs

端口名称。字符串。端口名称：。在可以显示端口的地方显示的名称。

协议名称。名称。协议名称：。DMX协议。

通信类型。EDMXCommunicationType枚举。通信类型:。该端口使用的通信类型。

网络接口卡IP地址。字符串。设备地址：。网络接口卡的IP地址，通过它接收DMX。

本地宇宙的开始。整数。本地宇宙开始：。本地开始的宇宙。

宇宙的数量。整数。Num Universes:. 宇宙的数量。

外部宇宙的开始。整数。外部宇宙的起点：. 这个起始地址被换位到...。例如，如果LocalUniverseStart是1，而这个地址是100，那么Local Universe 1就被作为Universe 100发送/接收。

优先级策略。EDMXPortPriorityStrategy 枚举。优先级策略：。如何处理优先权值。

优先权。整数。优先权:. 优先级值，可以作为一个过滤器或一个阈值。

端口指南。指南结构。端口指南:。唯一的标识符，与端口实例共享。注意：这需要BlueprintReadWrite才能被属性类型定制所访问，但被定制所隐藏。
