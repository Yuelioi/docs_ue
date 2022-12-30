# BreakSingleAnimationPlayData

添加一个节点，将'SingleAnimationPlayData'分解成其成员字段

## 图示

![]($-20221218-14423782.png)

## Inputs

单一动画播放数据。单一动画播放数据结构（按参考）。  

## Outputs

Anim To Play:动画资产对象参考.Anim to Play:.@todo在未来，我们应该把这个作为一个UObject.并有详细的定制来显示不同的东西。在这个骨架网格上播放的默认序列。

循环。布尔型。保存的循环：。SequenceToPlay循环的默认设置。这不是循环的当前状态。

播放。Boolean.保存的播放：。为SequenceToPlay的默认播放设置。这不是当前的播放状态。

初始位置。Float（单精度）。保存的位置：。SequenceToPlay的位置的默认设置，用于播放。

播放率。Float（单精度）。保存的播放率：。SequenceToPlay的播放率默认设置为播放。
