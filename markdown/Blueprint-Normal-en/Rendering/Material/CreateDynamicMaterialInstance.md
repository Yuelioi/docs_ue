# CreateDynamicMaterialInstance

Creates a Dynamic Material Instance for the specified element index, optionally from the supplied material.

Target is Primitive Component

## 图示

![]($-20221218-20373501.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Element Index: Integer. The index of the skin to replace the material for. If invalid, the material is unchanged and NULL is returned..

Source Material: Material Interface Object Reference.

Optional Name: Name.  

## Outputs

Out: Exec.

Return Value: Material Instance Dynamic Object Reference.

