# DuplicateMaterialExpression

Duplicates the provided material expression adding it to the same material / material function, and copying parameters.. Note: Does not duplicate transient properties (Ex: GraphNode).

Target is Material Editing Library

## 图示

![]($-20221218-19461832.png)

## Inputs

In: Exec.

Material: Material Object Reference. Material asset to add an expression to.

Material Function: Material Function Object Reference. Specified if adding an expression to a MaterialFunction, used as Outer for new expression object.

Expression: Material Expression Object Reference.  

## Outputs

Out: Exec.

Return Value: Material Expression Object Reference.

