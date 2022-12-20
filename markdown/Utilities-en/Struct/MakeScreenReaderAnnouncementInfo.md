# MakeScreenReaderAnnouncementInfo

Adds a node that create a 'ScreenReaderAnnouncementInfo' from its members

## 图示

![]($-20221218-15005358.png)

## Inputs

Should Queue: Boolean. Should Queue:. True if the associated announcement should be queued if it cannot be spoken immediately or is interrupted. Else false..

Interruptable: Boolean. Interruptable:. True if the associazted announcement can be intrrupted by another announcement. Else false..

Priority: EScreenReaderAnnouncementPriority Enum. Priority:. The priority level of the associated announcement..  

## Outputs

Screen Reader Announcement Info: Screen Reader Announcement Info Structure.

