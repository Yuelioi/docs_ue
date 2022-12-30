# BreakDynamicsBandSettings

添加一个节点，将'DynamicsBandSettings'分解成其成员字段

## 图示

![]($-20221218-14353885.png)

## Inputs

Dynamics乐队设置。动态频段设置结构（通过参考）。 

## Outputs

分频器最高频率。Float（单精度）。分频器最高频率：。这个频段和下一个频段之间的交叉频率。最后一个频段的这个属性将被忽略。

攻击时间Msec: Float (single-precision). 攻击时间Msec:。进入任何动态处理效果的时间量，单位是毫秒。

释放时间Msec。Float（单精度）。释放时间Msec:。释放动态处理效果的时间，以毫秒计。

阈值Db。Float（单精度）。阈值Db:。执行动态处理操作的阈值。

比率。Float (single-precision). 比率：。动态处理器的比率 -- 根据处理器的类型有不同的含义。

膝部带宽Db。Float (single-precision). 膝部带宽Db:。压缩器的膝部带宽，单位是dB。

输入增益Db。Float（单精度）。输入增益Db：。动态处理器的输入增益，单位是dB。

输出增益Db。Float（单精度）。输出增益Db:。动态处理器的输出增益，单位是dB。
