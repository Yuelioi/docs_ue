# BreakScreenReaderAnnouncementInf-

添加一个节点，将'ScreenReaderAnnouncementInfo'分解成其成员字段

## 图示

![]($-20221218-14422031.png)

## Inputs

读屏器公告信息。读屏器公告信息结构（按参考）。  

## Outputs

应该排队。布尔型。应该排队：。如果相关公告不能立即发言或被打断，应排队，则为真。否则为假。

可中断。布尔型。可中断：。如果指定的公告可以被另一个公告打断，则为真。否则为假。

优先级。EScreenReaderAnnouncementPriority枚举。优先级：。相关公告的优先级。
