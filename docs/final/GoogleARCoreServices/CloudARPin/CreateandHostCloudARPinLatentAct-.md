# CreateandHostCloudARPinLatentAct-

这将启动一个Latent Action来托管ARPin并从中创建一个UCloudARPin。如果托管完成，这个Latent Action的完整流程将被触发，或者发生了错误。

请注意，当这个函数被调用时，将始终创建一个UCloudARPin，即使是在CloudId被托管失败的情况下。你可以检查返回的UCloudARPin的CloudState，以了解托管失败的原因。

目标是谷歌ARCore服务功能库

## 图示

![]($-20221218-19151178.png)

## Inputs

在。执行。

ARPin to Host:ARPin对象参考。ARPin to host...

## Outputs

已完成。执行。

外出托管结果。EARPinCloudTaskResult枚举。ARPin的托管结果...

Out Cloud ARPin: 云ARPin对象参考。使用输入的ARPinToHost创建的UCloudARPin的新实例。

This will start a Latent Action to host the ARPin and creating a UCloudARPin from it.. The complete flow of this Latent Action will be triggered if the hosting is complete. or an error has occurred.

Note that a UCloudARPin will be always created when this function is called, even in the case. that the CloudId is failed to host. You can check the CloudState of returning UCloudARPin. to see why the hosting failed.

Target is Google ARCore Services Function Library

## 图示

![]($-20221218-19151178.png)

## Inputs

In: Exec.

ARPin to Host: ARPin Object Reference. The ARPin to host..  

## Outputs

Completed: Exec.

Out Hosting Result: EARPinCloudTaskResult Enum. The ARPin hosting result..

Out Cloud ARPin: Cloud ARPin Object Reference. A new instance of UCloudARPin created using the input ARPinToHost..

