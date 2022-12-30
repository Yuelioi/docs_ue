# CanConversationContinue

Checks the provided task result against any which would end the conversation e.g. EConversationTaskResultType::Invalid. or EConversationTaskResultType::AbortConversation

Target is Conversation Context Helpers

## 图示

![]($-20221218-18325441.png)

## Inputs

In: Exec.

Conversation Tas Result: Conversation Task Result Structure (by ref).  

## Outputs

Out: Exec.

Return Value: Boolean. Checks the provided task result against any which would end the conversation e.g. EConversationTaskResultType::Invalid. or EConversationTaskResultType::AbortConversation.

