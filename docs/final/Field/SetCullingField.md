# SetCullingField

根据剔除字段的结果评估输入字段

目标是剔除字段

## 图示

![](/uploads/projects/ue-bluprint/20221218-18595248.png)

## Inputs

目标。剔除字段对象参考。

剔除字段。字段节点基础对象参考。要使用的剔除字段。

输入字段。字段节点基本对象参考。将根据剔除字段的结果进行评估的输入字段。

剔除操作。EFieldCullingOperationType 枚举。如果剔除字段的结果等于 0（内部）或不同于 0（外部），则评估输入字段。

## Outputs

返回值。剔除字段对象参考。

<hr>

Evaluate the input field according to the result of the culling field

Target is Culling Field

## 图示

![](/uploads/projects/ue-bluprint/20221218-18595248.png)

## Inputs

Target: Culling Field Object Reference.

Culling Field: Field Node Base Object Reference. Culling field to be used.

Input Field: Field Node Base Object Reference. Input field that will be evaluated according to the culling field result.

Culling Operation: EFieldCullingOperationType Enum. Evaluate the input field if the result of the culling field is equal to 0 (Inside) or different from 0 (Outside).

## Outputs

Return Value: Culling Field Object Reference.
