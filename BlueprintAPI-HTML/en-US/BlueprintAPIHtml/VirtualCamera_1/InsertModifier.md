# InsertModifier

Insert a modifier to the stack with a given name and index.. If that name is already in use then the modifier will not be added.. The index must be between zero and the number of existing modifiers inclusive. Returns the created modifier if the Add succeeded

Target is VCam Component

## 图示

![]($-20221218-21284622.png)

## Inputs

In: Exec.

Target: VCam Component Object Reference.

Name: Name.

Index: Integer.

Modifier Class: VCam Modifier Class Reference.  

## Outputs

Out: Exec.

Created Modifier: VCam Modifier Object Reference.

Success: Boolean. Insert a modifier to the stack with a given name and index.. If that name is already in use then the modifier will not be added.. The index must be between zero and the number of existing modifiers inclusive. Returns the created modifier if the Add succeeded.

