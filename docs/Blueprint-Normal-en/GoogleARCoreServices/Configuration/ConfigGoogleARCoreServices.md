# ConfigGoogleARCoreServices

Configure the current Unreal AR session with the desired GoogleARCoreServices configuration.. If there is an running AR session, the configuration will take effect immediately. Otherwise,. it will take effect when the next AR session is running.

Target is Google ARCore Services Function Library

## 图示

![]($-20221218-19151997.png)

## Inputs

In: Exec.

Service Config: Google ARCore Services Config Structure. The desired GoogleARCoreServices configuration..  

## Outputs

Out: Exec.

Return Value: Boolean. True if GoogleARCoreServices is configured successfully. False if the configuration failed to apply..

