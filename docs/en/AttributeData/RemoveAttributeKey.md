# RemoveAttributeKey

Remove a single key from the attribute with provided identifier. Broadcasts a EAnimDataModelNotifyType::AttributeChanged notify if successful.

Target is Animation Data Controller

## 图示

![]($-20221218-18021098.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Attribute Identifier: Animation Attribute Identifier Structure (by ref). Identifier for the attribute from which the key is to be removed.

Time: Float (single-precision). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the attribute key was successfully removed.

