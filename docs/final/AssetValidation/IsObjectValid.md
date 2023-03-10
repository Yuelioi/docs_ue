# IsObjectValid

目标是编辑验证器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18015498.png)

## Inputs

目标。编辑器验证器子系统对象参考。

在对象中。对象参考。

在验证用例中。EDataValidationUsecase Enum.

## Outputs

验证错误。文本数组。

验证警告。文本数组。

返回值。EDataValidationResult 枚举。如果对象包含有效数据，返回 Valid；如果对象包含无效数据，返回 Invalid；如果没有对对象进行验证，返回 NotValidated。

<hr>

Target is Editor Validator Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18015498.png)

## Inputs

Target: Editor Validator Subsystem Object Reference.

In Object: Object Reference.

In Validation Usecase: EDataValidationUsecase Enum.

## Outputs

Validation Errors: Array of Texts.

Validation Warnings: Array of Texts.

Return Value: EDataValidationResult Enum. Returns Valid if the object contains valid data; returns Invalid if the object contains invalid data; returns NotValidated if no validations was performed on the object.
