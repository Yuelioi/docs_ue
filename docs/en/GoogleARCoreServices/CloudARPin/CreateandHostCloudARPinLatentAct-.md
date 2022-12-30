# CreateandHostCloudARPinLatentAct-

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

