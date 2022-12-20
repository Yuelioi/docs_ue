# RemoveAllAttributes

Removes all stored attributes. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify for each removed attribute.

Target is Animation Data Controller

## 图示

![]($-20221218-18020530.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Integer. Total number of removes attributes.

