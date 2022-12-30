# RequestSpeak

Requests an announcement to be spoken to the screen reader user. This is the main mechanism to provide text to speech auditory feedback. to end users.. Calling this function does not guarantee that the announcement will be spoken via text to speech and be. heard by a user.. All announcements spoken via text to speech will be asynchronous and will not block the game thread.. If the screen reader user is active and no announcements are currently spoken, the announcement will be spoken immediately.. If another announcement is currently being spoken, the passed in announcement could be queued or interrupt the currently spoken announcement.

Target is Slate Screen Reader Engine Subsystem

## 图示

![]($-20221218-20585341.png)

## Inputs

In: Exec.

Target: Slate Screen Reader Engine Subsystem Object Reference.

Screen Reader User Id: Integer. The user Id of the screen reader user the announcement is intended for.

Announcement: Screen Reader Announcement Structure. The announcement requested to be spoken to the screen reader user.  

## Outputs

Out: Exec.

Return Value: Screen Reader Reply Structure. FScreenReaderReply::Handled() if the request was successfully processed. Else return FScreenReader::Unhandled() See: FScreenReaderAnnouncement, FScreenReaderAnnouncementInfo.

