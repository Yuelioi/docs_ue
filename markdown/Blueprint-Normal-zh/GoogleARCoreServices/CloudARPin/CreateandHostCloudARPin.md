# CreateandHostCloudARPin

创建和托管一个CloudARPin并立即返回。请注意，这个函数只启动了托管过程。调用GetARPinCloudState来检查，如果托管完成或出错失败。

目标是谷歌ARCore服务功能库

## 图示

![]($-20221218-19151067.png)

## Inputs

在。执行。

ARPin to Host:ARPin对象参考。  

## Outputs

出：执行。

输出任务结果。EARPinCloudTaskResult Enum.

返回值。云ARPin对象参考。创建和托管一个CloudARPin并立即返回。注意，这个函数只是启动了托管过程。调用GetARPinCloudState来检查。如果托管已经完成或出错失败。
