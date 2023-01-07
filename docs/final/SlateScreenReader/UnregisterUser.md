# UnregisterUser

从屏幕阅读器框架中取消所提供的用户 ID 的注册，并停用该用户。未注册的用户将不再接收或响应可访问的事件和输入。如果所提供的用户 ID 没有在屏幕阅读器上注册，则不会发生任何事情。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20590037.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。要从读屏器框架中取消注册的用户 ID...

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户成功解除注册，则返回 FScreenReaderReply::Handled()。否则返回 FScreenReaderReply::Unhandled()。

<hr>

Unregisters a provided user Id from the screen reader framework and deactivates the user. The unregistered user will no longer receive or respond to accessible events and input.. Nothing will happen if the provided user Id has not been registered with the screen reader.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20590037.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id to unregister from the screen reader framework..

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully unregistered. Else FScreenReaderReply::Unhandled() is returned..
