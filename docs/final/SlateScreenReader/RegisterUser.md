# RegisterUser

将所提供的用户 ID 注册到屏幕阅读器框架中，并允许屏幕阅读器用户接收和响应无障碍事件和无障碍输入。如果传入的 Id 已经被注册，则无任何作用。注意：一个成功注册的读屏器用户默认是停用的，不会对无障碍事件或无障碍输入作出反应。你需要调用 ActivateUser()来允许新注册的屏幕阅读器用户响应无障碍事件和无障碍输入。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585228.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。要注册的读屏器用户的 ID。该 ID 应与有效的 Slate 用户 ID 相对应，用于激活硬件输入设备。如果不确定，请使用 Id 0...

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户成功注册，则返回 FScreenReaderReply::Handled()。否则返回 FScreenReaderReply::Unhandled()。参见。ActivateUser()。

<hr>

Registers a provided user Id to the screen reader framework and allows the screen reader user to receive and respond to accessible events and accessible input.. Does nothing if the passed in Id is already registered.. Note: A successfully registered screen reader user is deactivated by default and will not respond to accessible events or accessible input.. You need to call ActivateUser() to allow the newly registered screen reader user to respond to the accessible events and accessible input.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585228.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to register. The Id should correspond to a valid Slate user Id for an active hardware input device. If unsure, use Id 0..

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully registered. Else FScreenReaderReply::Unhandled() is returned. See: ActivateUser().
