# DeactivateUser

停用屏幕阅读器，并禁用所有的公告和文字转语音服务，使它们无所作为。如果传入的用户身份与已注册的读屏器用户不一致，则什么也不会发生。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20584316.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。请求停用的屏幕阅读器用户的 ID。该 ID 应与输入设备的 Slate 用户 ID 相对应。如果不确定，请使用 Id 0...

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户被成功停用，则返回 FScreenReaderReply::Handled()。否则返回 FScreenReaderReply::Unhandled()。

<hr>

Deactivates the screen reader and disables all announcement and text to speech services. making them do nothing.. If the passed in user Id does not correspond to a registered screen reader user, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20584316.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to request deactivation. The Id should correspond to the Slate user id of an input device. If unsure, use Id 0..

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the screen reader user is successfully deactivated. Else FScreenReaderReply::Unhandled() is returned..
