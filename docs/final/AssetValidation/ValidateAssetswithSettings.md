# ValidateAssetswithSettings

被调用以验证来自用户界面或小命令的资产。

目标是编辑器验证器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18015613.png)

## Inputs

目标。编辑器验证器子系统对象参考。

资产数据列表。资产数据结构的数组。

在设置中。Validate Assets Settings 结构（通过引用）。为 ValidateAssetsWithSettings 传递上下文和设置的结构。

## Outputs

Out Results（结果）。验证资产结果结构。关于验证资产命令的结果的更多详细信息。

返回值。整数。有验证失败或警告的资产的数量。

<hr>

Called to validate assets from either the UI or a commandlet

Target is Editor Validator Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18015613.png)

## Inputs

Target: Editor Validator Subsystem Object Reference.

Asset Data List: Array of Asset Data Structures.

In Settings: Validate Assets Settings Structure (by ref). Structure passing context and settings for ValidateAssetsWithSettings.

## Outputs

Out Results: Validate Assets Results Structure. More detailed information about the results of the validate assets command.

Return Value: Integer. Number of assets with validation failures or warnings.
