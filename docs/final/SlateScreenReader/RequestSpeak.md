# RequestSpeak

要求向屏幕阅读器用户发布公告。这是提供文字转语音听觉反馈的主要机制，对终端用户而言。调用这个函数并不保证公告会通过文本到语音的方式被说出，并被用户听到。所有通过文本到语音说出的公告将是异步的，不会阻塞游戏线程。如果屏幕阅读器用户处于活动状态，并且当前没有公告，则公告将被立即说出。如果当前正在说另一个公告，那么传入的公告可能会被排队或打断当前所说的公告。

目标是 Slate 屏幕阅读器引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585341.png)

## Inputs

在。执行。

目标。石板屏幕阅读器引擎子系统对象参考。

读屏器用户标识。整数。公告所针对的屏幕阅读器用户的 ID。

公告。读屏器公告结构。要求对屏幕阅读器用户说的公告。

## Outputs

出：执行。

返回值。读屏器回复结构。如果请求被成功处理，返回 FScreenReaderReply::Handled()。否则返回 FScreenReader::Unhandled() 参见。FScreenReaderAnnouncement, FScreenReaderAnnouncementInfo。

<hr>

Requests an announcement to be spoken to the screen reader user. This is the main mechanism to provide text to speech auditory feedback. to end users.. Calling this function does not guarantee that the announcement will be spoken via text to speech and be. heard by a user.. All announcements spoken via text to speech will be asynchronous and will not block the game thread.. If the screen reader user is active and no announcements are currently spoken, the announcement will be spoken immediately.. If another announcement is currently being spoken, the passed in announcement could be queued or interrupt the currently spoken announcement.

Target is Slate Screen Reader Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20585341.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user the announcement is intended for.

Announcement: Screen Reader Announcement Structure. The announcement requested to be spoken to the screen reader user.

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the request was successfully processed. Else return FScreenReader::Unhandled() See: FScreenReaderAnnouncement, FScreenReaderAnnouncementInfo.
