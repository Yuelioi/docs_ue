# BreakClientConversationOptionEnt-

添加一个节点，将'客户端对话选项条目'分解成其成员字段

## 图示

![]($-20221218-14323152.png)

## Inputs

客户端对话选项条目。客户端对话选项条目结构（通过引用）。 

## Outputs

选择文本。文本。Choice Text: 选择文本。

选择标签。Gameplay标签容器结构。选择标签。

选择类型。EConversationChoiceType枚举。选择类型。

Choice Reference（选择参考）。Conversation Choice Reference结构。选择参考。

额外数据。Array of Conversation Node Parameter Pair Structures. 额外数据：。偶尔一个选择可能需要向下发送完全是额外的元数据。这只是额外的信息，用于客户端做一些事情，比如在用户界面中显示更多的信息。这些信息在返回服务器时不会被用来做选择。
