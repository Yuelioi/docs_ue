# MakeSubmixEffectFilterSettings

添加一个节点，从其成员中创建一个 "SubmixEffectFilterSettings"。

## 图示

![]($-20221218-15024507.png)

## Inputs

过滤器类型。ESubmixFilterType枚举。滤波器类型：。子混音滤波效果使用哪种类型的滤波器。

过滤算法。ESubmixFilterAlgorithm Enum.滤波器算法：。用于子混音滤波器效果的滤波器算法的类型。

滤波频率。Float (single-precision).滤波器频率：。输出滤波器的截止频率（HZ）[0.0, 20000.0]。

滤波器Q：浮点数（单精度）。滤波器Q：。输出滤波器的谐振（Q）[0.5, 10]。  

## Outputs

子混音效果滤镜设置。子混音效果滤镜设置结构。
