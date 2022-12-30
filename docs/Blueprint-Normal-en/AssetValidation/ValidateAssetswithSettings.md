# ValidateAssetswithSettings

Called to validate assets from either the UI or a commandlet

Target is Editor Validator Subsystem

## 图示

![]($-20221218-18015613.png)

## Inputs

Target: Editor Validator Subsystem Object Reference.

Asset Data List: Array of Asset Data Structures.

In Settings: Validate Assets Settings Structure (by ref). Structure passing context and settings for ValidateAssetsWithSettings.  

## Outputs

Out Results: Validate Assets Results Structure. More detailed information about the results of the validate assets command.

Return Value: Integer. Number of assets with validation failures or warnings.

