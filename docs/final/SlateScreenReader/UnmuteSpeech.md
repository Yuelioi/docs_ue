# UnmuteSpeech

解除屏幕阅读器用户的文字转语音。如果提供的用户 ID 不存在，将不会发生任何事情。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585928.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。屏幕阅读器用户的 ID，用于取消文本到语音的静音。

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户成功解除静音，则返回 FScreenReaderReply::Handled()。否则，返回 FScreenReaderReply::Unhandled()。

<hr>

Unmutes the text to speech for a screen reader user.. If the provided user Id doesn't exist, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585928.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to unmute text to speech for..

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() is returned if the screen reader user is successfully unmuted. Otherwise, FScreenReaderReply::Unhandled() is returned..
