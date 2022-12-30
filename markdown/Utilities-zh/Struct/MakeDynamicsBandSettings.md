# MakeDynamicsBandSettings

添加一个节点，从其成员中创建一个 "DynamicsBandSettings"。

## 图示

![]($-20221218-14521509.png)

## Inputs

分频器最高频率。Float (single-precision).分频器最高频率：。这个频段和下一个频段之间的交叉频率。最后一个频段的这个属性将被忽略。

攻击时间Msec:Float (single-precision).攻击时间Msec:。进入任何动态处理效果的时间量，以毫秒为单位。

释放时间Msec:Float (single-precision).释放时间Msec:。释放动态处理效果的时间，单位是毫秒。

阈值Db。Float (single-precision).阈值Db:。执行动态处理操作的阈值。

比率。Float（单精度）。比率：。动态处理器比率 -- 根据处理器的类型有不同的含义。

膝部带宽Db。Float（单精度）。膝部带宽Db:。压缩机的膝部带宽，单位是dB。

输入增益Db。Float (single-precision).输入增益Db：。动态处理器的输入增益，单位是dB。

输出增益Db。Float（单精度）。输出增益Db:。动态处理器的输出增益，单位是dB。  

## Outputs

动感地带的设置。动态乐队设置结构。
