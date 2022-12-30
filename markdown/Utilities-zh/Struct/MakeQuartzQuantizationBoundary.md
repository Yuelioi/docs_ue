# MakeQuartzQuantizationBoundary

添加一个节点，从其成员中创建一个 "QuartzQuantizationBoundary"。

## 图示

![]($-20221218-14594487.png)

## Inputs

量化。EQuartzCommandQuantization Enum.量化：。我们感兴趣的分辨率。

乘法器。Float（单精度）。乘数：。在我们关心的发病前，要等待多少个 "决议"。

计数参考点。EQuarztQuantizationReference枚举。计数参考点。

在时钟启动时开火。布尔型。在时钟开始时触发：。如果这是真的，并且时钟还没有开始，事件将在时钟开始时立即触发。

如果时钟不运行，取消命令。布尔值。如果时钟不运行，取消命令：。如果这是真的，如果时钟停止或不运行，此命令将被取消。

排队时重置时钟。布尔值。Reset Clock on Queued:（排队时重置时钟）。如果这是真的，排队的声音也会调用重置时钟命令。

排队时恢复时钟。布尔型。排队时恢复时钟：。如果这是真的，排队的声音也会调用Resume Clock命令。  

## Outputs

石英量化边界。石英量化边界结构。
