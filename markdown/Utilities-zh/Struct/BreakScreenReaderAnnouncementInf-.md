# BreakScreenReaderAnnouncementInf-

Adds a node that breaks a 'ScreenReaderAnnouncementInfo' into its member fields

## 图示

![]($-20221218-14422031.png)

## Inputs

Screen Reader Announcement Info: Screen Reader Announcement Info Structure (by ref).  

## Outputs

Should Queue: Boolean. Should Queue:. True if the associated announcement should be queued if it cannot be spoken immediately or is interrupted. Else false..

Interruptable: Boolean. Interruptable:. True if the associazted announcement can be intrrupted by another announcement. Else false..

Priority: EScreenReaderAnnouncementPriority Enum. Priority:. The priority level of the associated announcement..

