# BreakSubmixEffectFilterSettings

添加一个节点，将'SubmixEffectFilterSettings'分解成其成员字段

## 图示

![]($-20221218-14440186.png)

## Inputs

子混音效果滤波器设置。子混音效果滤镜设置结构（按参考）。  

## Outputs

过滤器类型。ESubmixFilterType枚举。滤波器类型：。子混音滤波效果使用哪种类型的滤波器。

过滤算法。ESubmixFilterAlgorithm Enum.滤波器算法：。用于子混音滤波器效果的滤波器算法的类型。

滤波频率。Float (single-precision).滤波器频率：。输出滤波器的截止频率（HZ）[0.0, 20000.0]。

滤波器Q：浮点数（单精度）。滤波器Q：。输出滤波器的谐振（Q）[0.5, 10]。
