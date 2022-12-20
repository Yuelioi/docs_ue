# RemoveAttribute

Removes an attribute, if found, with the provided information. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18020985.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the to-be-removed attribute.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the attribute was successfully removed.

