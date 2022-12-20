# BreakClientConversationOptionEnt-

Adds a node that breaks a 'ClientConversationOptionEntry' into its member fields

## 图示

![]($-20221218-14323152.png)

## Inputs

Client Conversation Option Entry: Client Conversation Option Entry Structure (by ref).  

## Outputs

Choice Text: Text. Choice Text.

Choice Tags: Gameplay Tag Container Structure. Choice Tags.

Choice Type: EConversationChoiceType Enum. Choice Type.

Choice Reference: Conversation Choice Reference Structure. Choice Reference.

Extra Data: Array of Conversation Node Parameter Pair Structures. Extra Data:. Occasionally a choice might need to send down metadata that's entirely extra.. It's just bonus information for the client to do things like show more information. in the UI. This information is not used on the return to the server to make the choice..

