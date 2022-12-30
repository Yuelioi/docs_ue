# BreakDetectedFaceFeatureRegion

添加一个节点，将'DetectedFaceFeatureRegion'分解为其成员字段

## 图示

![]($-20221218-14335292.png)

## Inputs

检测到的脸部特征区域。检测到的人脸特征区域结构（通过引用）。 

## Outputs

特征类型。EDetectedFaceFeatureType枚举。特征类型：。被检测到的区域的类型。

点。矢量二维结构的阵列。点：。包含检测到的特征区域的点的集合。

信度。Float（单精度）。信度：。ML在确定该特征及其类型时的信心程度。
