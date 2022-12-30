# IsAssetValid

目标是编辑验证器子系统

## 图示

![]($-20221218-18015384.png)

## Inputs

目标。编辑器验证器子系统对象参考。

资产数据。资产数据结构（通过参考）。

在验证用例中。EDataValidationUsecase Enum。 

## Outputs

Validation Errors（验证错误）。文本数组。

验证警告。文本数组。

返回值。EDataValidationResult枚举。如果AssetData指向的对象包含有效数据，则返回Valid；如果对象包含无效数据或不存在，则返回Invalid；如果没有对对象进行验证，则返回NotValidated。
