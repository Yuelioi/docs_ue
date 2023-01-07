# SetSpeechVolume

设置文字转语音对屏幕阅读器用户说话的音量。如果提供的用户 ID 不存在，将不会发生任何事情。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585689.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。屏幕阅读器用户的 ID，为其设置文字转语音的音量。

体积。Float（单精度）。文字转语音的音量将被设置在所提供的屏幕阅读器用户上。该值将在 0.0f 和 1.0f 之间夹住。

## Outputs

出：执行。

返回值。读屏器回复结构。如果为读屏器用户成功设置了语音音量，则返回 FScreenReaderReply::Handled()。否则，将返回 FScreenReaderReply::Unhandled()。

<hr>

Sets the volume text to speech will be speaking at for a screen reader user.. If the provided user Id doesn't exist, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585689.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to set the text to speech volume for.

Volume: Float (single-precision). The volume text to speech will be set at for the provided screen reader user. Value will be clamped between 0.0f and 1.0f..

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() is returned if the speech volume is successfully set for the screen reader user. Otherwise, FScreenReaderReply::Unhandled() is returned..
