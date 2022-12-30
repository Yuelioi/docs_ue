# CreateandResolve-

这将启动一个Latent Action，使用给定的CloudId创建UCloudARPin。如果创建UCloudARPin成功或发生错误，这个Latent Action的完整流程将被触发。

请注意，当此函数被调用时，将始终创建一个UCloudARPin，即使在CloudId未能解析的情况下。你可以检查返回的UCloudARPin的CloudState，以了解解析失败的原因。

目标是谷歌ARCore服务功能库

## 图示

![]($-20221218-19151293.png)

## Inputs

在。执行。

云标识。字符串。将用于解决ARPin的CloudId。  

## Outputs

已完成。执行。

出了获取的结果。EARPinCloudTaskResult枚举。ARPin的获取结果。

Out Cloud ARPin: 云ARPin对象参考。
