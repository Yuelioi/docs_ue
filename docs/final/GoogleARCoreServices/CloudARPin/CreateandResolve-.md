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

This will start a Latent Action to create UCloudARPin using the given CloudId. The complete flow. of this Latent Action will be triggered if creating the UCloudARPin is successfully or an error. has occurred.

Note that a UCloudARPin will be always created when this function is called, even in the case. that the CloudId is failed to resolve. You can check the CloudState of returning UCloudARPin. to see why the resolving failed.

Target is Google ARCore Services Function Library

## 图示

![]($-20221218-19151293.png)

## Inputs

In: Exec.

Cloud Id: String. The CloudId that will be used to resolve the ARPin.  

## Outputs

Completed: Exec.

Out Acquiring Result: EARPinCloudTaskResult Enum. The ARPin acquiring result..

Out Cloud ARPin: Cloud ARPin Object Reference.

