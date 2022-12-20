# IsObjectValid

Target is Editor Validator Subsystem

## 图示

![]($-20221218-18015498.png)

## Inputs

Target: Editor Validator Subsystem Object Reference.

In Object: Object Reference.

In Validation Usecase: EDataValidationUsecase Enum.  

## Outputs

Validation Errors: Array of Texts.

Validation Warnings: Array of Texts.

Return Value: EDataValidationResult Enum. Returns Valid if the object contains valid data; returns Invalid if the object contains invalid data; returns NotValidated if no validations was performed on the object.

