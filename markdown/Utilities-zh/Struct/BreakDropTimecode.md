# BreakDropTimecode

添加一个节点，将'DropTimecode'分解成其成员字段

## 图示

![]($-20221218-14353624.png)

## Inputs

Drop Timecode。Drop Timecode结构（通过引用）。 

## Outputs

Timecode: Timecode: 时间码结构。Timecode:. 解码的时间码。

Frame Rate: 整数。帧率：。猜测传入的帧率。

Color Framing: 布尔值。Color Framing:. 同步与色彩突发相一致。

向前运行。布尔值。正向运行：。当时间码被向前读取时。

New Frame（新帧）。布尔值。新帧：。是一个新的时间码帧。
