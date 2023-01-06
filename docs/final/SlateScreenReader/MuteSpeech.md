# MuteSpeech

使屏幕阅读器用户的文字转语音静音。如果提供的用户ID不存在，将不会发生任何事情。

目标是Slate屏幕阅读器引擎子系统

## 图示

![]($-20221218-20585117.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。屏幕阅读器用户的ID，用于将文字转语音静音。

## Outputs

出：执行。

返回值。读屏器回复结构。如果读屏器用户被成功静音，则返回FScreenReaderReply::Handled()。否则，将返回FScreenReaderReply::Unhandled()。

Mutes the text to speech for a screen reader user.. If the provided user Id doesn't exist, nothing will happen.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585117.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to mute text to speech for..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() is returned if the screen reader user is successfully muted. Otherwise, FScreenReaderReply::Unhandled() is returned..

