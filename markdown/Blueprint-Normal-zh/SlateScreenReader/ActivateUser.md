# ActivateUser

激活屏幕阅读器用户，并满足客户可以提出的无障碍服务请求，如文本转语音。当读屏器用户第一次在读屏器上注册时，默认是停用的。用户必须明确地激活屏幕阅读器用户。如果传入的用户标识与注册的屏幕阅读器用户不一致，则不会发生任何事情。

目标是Slate屏幕阅读器引擎子系统

## 图示

![]($-20221218-20584089.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。请求激活的读屏器用户的用户ID。  

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户被成功激活，返回FScreenReaderReply::Handled()。否则返回FScreenReaderReply::Unhandled()。
