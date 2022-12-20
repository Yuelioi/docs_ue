# IsAssetValid

Target is Editor Validator Subsystem

## 图示

![]($-20221218-18015384.png)

## Inputs

Target: Editor Validator Subsystem Object Reference.

Asset Data: Asset Data Structure (by ref).

In Validation Usecase: EDataValidationUsecase Enum.  

## Outputs

Validation Errors: Array of Texts.

Validation Warnings: Array of Texts.

Return Value: EDataValidationResult Enum. Returns Valid if the object pointed to by AssetData contains valid data; returns Invalid if the object contains invalid data or does not exist; returns NotValidated if no validations was performed on the object.

