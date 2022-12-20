# RemoveAllAttributesforBone_Messa-

Removes all attributes for the specified bone name, if any. Broadcasts a EAnimDataModelNotifyType::AttributeRemoved notify for each removed attribute.

Target is Animation Data Controller

## 图示

![]($-20221218-18020752.png)

## Inputs

In: Exec.

Target: Object Reference.

Bone Name: Name (by ref). Name of the bone to remove attributes for.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

Return Value: Integer. Total number of removes attributes.

