# CreateandResolveCloudARPin

创建和解决一个CloudARPin并立即返回。请注意，这个函数只启动了获取过程。调用GetARPinCloudState来检查，如果获取已经完成或者失败了。

目标是谷歌ARCore服务功能库

## 图示

![]($-20221218-19151423.png)

## Inputs

在。执行。

云标识。字符串。  

## Outputs

出：执行。

输出任务结果。EARPinCloudTaskResult Enum.

返回值。云ARPin对象参考。创建和解析一个CloudARPin并立即返回。请注意，这个函数只启动了获取过程。调用GetARPinCloudState来检查。如果获取完成或出错失败。
