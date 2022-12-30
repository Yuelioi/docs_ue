# BreakDetectedFaceFeature2D

添加一个节点，将'DetectedFaceFeature2D'分解为其成员字段

## 图示

![]($-20221218-14335206.png)

## Inputs

Detected Face Feature 2D: 检测到的人脸特征2D结构（通过引用）。 

## Outputs

特征类型。EDetectedFaceFeatureType枚举。特征类型：。被检测到的区域的类型。

Bounding Box（包围盒）。箱体二维结构。边界框：。检测到的特征在图像中的边界盒。

Confidence（信心）。Float（单精度）。信度：。ML在确定该特征及其类型时的信心程度。
