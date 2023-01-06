# DuplicateMaterialExpression

复制提供的材质表达式，将其添加到相同的材质/材质函数中，并复制参数。注意：不复制瞬态属性（例如：GraphNode）。

目标是材料编辑库

## 图示

![]($-20221218-19461832.png)

## Inputs

在。执行。

材料。材料对象参考。要添加表达式的材料资产。

材料功能。材料函数对象参考。如果向MaterialFunction添加表达式，则指定为新表达式对象的外部。

表达式。材料表达式对象参考。  

## Outputs

出：执行。

返回值。材料表达式对象参考。

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

