# BreakConversationChoiceReference

添加一个节点，将'ConversationChoiceReference'分解为其成员字段

## 图示

![]($-20221218-14331972.png)

## Inputs

对话选择参考。对话选择参考结构（通过参考）。 

## Outputs

节点参考。Conversation Node Handle结构。节点参考：。这就是我们的选择所针对的节点。

节点参数。对话节点参数对结构的数组。节点参数：。这些是该节点被激活所需的参数。同一个节点有可能处理它所提供的几个动态选择，所以这些参数在客户端响应服务器的时候被用来唯一地识别选择。
