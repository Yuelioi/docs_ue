# BreakConversationChoiceReference

Adds a node that breaks a 'ConversationChoiceReference' into its member fields

## 图示

![]($-20221218-14331972.png)

## Inputs

Conversation Choice Reference: Conversation Choice Reference Structure (by ref).  

## Outputs

Node Reference: Conversation Node Handle Structure. Node Reference:. This is the node that we're targeting with our choice..

Node Parameters: Array of Conversation Node Parameter Pair Structures. Node Parameters:. These are the parameters required by that node to be activated. The. same node could potentially handle several dynamic choices it provides, so these. parameters are used to uniquely identify the choice when the client responds to the server..

