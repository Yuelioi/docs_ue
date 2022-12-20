# BreakValidateAssetsSettings

Adds a node that breaks a 'ValidateAssetsSettings' into its member fields

## 图示

![]($-20221218-14450931.png)

## Inputs

Validate Assets Settings: Validate Assets Settings Structure (by ref).  

## Outputs

Skip Excluded Directories: Boolean. Skip Excluded Directories:. If true, will not validate files in excluded directories.

Show If No Failures: Boolean. Show if No Failures:. If true, will add notifications for files with no validation and display even if everything passes.

Validation Usecase: EDataValidationUsecase Enum. Validation Usecase:. The usecase requiring datavalidation.

