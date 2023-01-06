# SetSpeechRate

设置文本转语音对屏幕阅读器用户的说话速度。如果提供的用户ID不存在，将不会发生任何事情。

目标是Slate屏幕阅读器引擎子系统

## 图示

![]($-20221218-20585571.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。屏幕阅读器用户的ID，为其设置文字转语音率。

速率。Float（单精度）。为所提供的屏幕阅读器用户设置的文字转语音的速率。该值将在0.0f和1.0f之间夹住。

## Outputs

出：执行。

返回值。读屏器回复结构。如果为读屏器用户成功设置了语音率，则返回FScreenReaderReply::Handled()。否则，将返回FScreenReaderReply::Unhandled()。

Sets the rate text to speech will be speaking at for a screen reader user.. If the provided user Id doesn't exist, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585571.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to set the text to speech rate for.

Rate: Float (single-precision). The rate text to speech will be set at for the provided screen reader user. Value will be clamped between 0.0f and 1.0f..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() is returned if the speech rate is successfully set for the screen reader user. Otherwise, FScreenReaderReply::Unhandled() is returned..

