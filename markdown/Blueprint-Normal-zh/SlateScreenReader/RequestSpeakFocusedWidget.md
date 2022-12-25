# RequestSpeakFocusedWidget

要求读出用户关注的无障碍小部件的信息。如果目前没有任何东西被屏幕阅读器用户关注，就不会被读出。在RequestSpeak()中关于公告的保证同样适用于这个函数。如果传入的用户ID尚未在读屏器上注册，则不会发生任何事情。

目标是Slate屏幕阅读器引擎子系统

## 图示

![]($-20221218-20585458.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。请求读出其无障碍焦点的用户ID。  

## Outputs

出：执行。

返回值。读屏器回复结构。如果用户关注的widget的信息被成功说出，则返回FScreenReaderReply::Handled（）。否则返回FScreenReaderReply::Unhandled()。
