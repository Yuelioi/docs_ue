# StopSpeaking

立即停止为某一特定的屏幕阅读器用户播放任何当前播放的公告。如果当前没有为该用户播放的公告，或者该用户身份未在读屏器上注册，则不做任何处理。

目标是Slate屏幕阅读器引擎子系统

## 图示

![]($-20221218-20585803.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。屏幕阅读器用户的ID，要求停止发布公告。

## Outputs

出：执行。

返回值。读屏器回复结构。如果停止讲话的请求被成功处理，则返回FScreenReader::Handled()。否则返回FScreenReaderReply::Unhandled()。

Immediately stops speaking any currently spoken announcement for a particular screen reader user.. Does nothing if there is no announcement currently being spoken for the user or if the user Id is not registered with the screen reader.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585803.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user to request announcements to be stopped..  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReader::Handled() if the request to stop speaking is successfully processed. Else FScreenReaderReply::Unhandled() is returned..

