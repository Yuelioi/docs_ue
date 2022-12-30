# ConfigSession2

Configure the ASA session.. This will take effect when the next session is started.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-17554418.png)

## Inputs

In: Exec.

Session Configuration: Azure Spatial Anchors Session Configuration Structure (by ref). Azure cloud sign in related configuration..

Coarse Localization Settings: Coarse Localization Settings Structure. Settings related to locating the device in the world (eg GPS)..

Log Verbosity: EAzureSpatialAnchorsLogVerbosity Enum. Logging verbosity for the Azure Spatial Anchor api..  

## Outputs

Out: Exec.

Return Value: Boolean. (Boolean) True if the session configuration was set..

