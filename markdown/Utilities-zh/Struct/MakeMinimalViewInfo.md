# MakeMinimalViewInfo

添加一个节点，从其成员中创建一个 "MinimalViewInfo"。

## 图示

![]($-20221218-14574672.png)

## Inputs

地点：向量。向量。位置：。位置：。

旋转： 旋转器。轮换：。轮换。

FOV。Float（单精度）。FOV:。在透视模式下的水平视场（单位：度）（在正视模式下忽略）。

Ortho Width: Float (single-precision).正射宽度：。正射影像的理想宽度（以世界为单位）（在透视模式下忽略）。

近夹平面正射。Float（单精度）。Ortho Near Clip Plane：.正视图的近平面距离（以世界为单位）。

正交远夹平面。浮点（单精度）。Ortho Far Clip Plane：。正视图的远平面距离（以世界为单位）。

纵横比。Float（单精度）。纵横比：。纵横比（宽/高）。

约束长宽比。Boolean.Constrain Aspect Ratio:.限制高宽比。如果bConstrainAspectRatio为真，如果目标视图的长宽比与本相机要求的不同，将添加黑条。

对LOD使用视场：布尔值。为LOD使用视场：。如果为真，在计算网格的细节等级时，考虑视场角。

投影模式。ECameraProjectionMode枚举。投影模式：。摄像机的类型。

后期处理的混合重量。Float（单精度）。后期处理混合权重：。表示是否应该应用PostProcessSettings。

后期流程设置。后期处理设置结构。后期处理设置：。如果PostProcessBlendWeight为非零，则使用的后处理设置。

偏离中心的投影偏移。矢量2D结构。偏离中心投影偏移：。离轴/偏心投影偏移量与屏幕尺寸的比例。  

## Outputs

最小的视图信息。最低限度的视图信息结构。
