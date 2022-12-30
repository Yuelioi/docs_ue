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
