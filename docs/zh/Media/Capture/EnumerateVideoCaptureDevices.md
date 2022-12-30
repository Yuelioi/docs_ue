# EnumerateVideoCaptureDevices

列举可用的音频捕获设备。

要过滤一个特定的设备子集，使用MakeBitmask节点，以EMediaVideoCaptureDeviceFilter作为Bitmask枚举。

目标是媒体蓝图功能库

## 图示

![]($-20221218-20000649.png)

## Inputs

在。执行。

过滤器。整数。要返回的捕获设备的类型（-1=全部）。  

## Outputs

出：执行。

输出设备。媒体捕获设备结构的数组。将包含可用的捕获设备。
