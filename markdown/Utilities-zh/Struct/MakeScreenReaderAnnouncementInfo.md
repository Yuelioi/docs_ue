# MakeScreenReaderAnnouncementInfo

添加一个节点，从其成员中创建一个 "ScreenReaderAnnouncementInfo"。

## 图示

![]($-20221218-15005358.png)

## Inputs

应该排队。布尔型。应该排队：。如果相关公告不能立即发言或被打断，应排队，则为真。否则为假。

可中断。布尔型。可中断：。如果指定的公告可以被另一个公告打断，则为真。否则为假。

优先级。EScreenReaderAnnouncementPriority枚举。优先级：。相关公告的优先级。  

## Outputs

读屏器公告信息。读屏器公告信息结构。
