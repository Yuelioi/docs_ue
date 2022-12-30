# MakeHairGroupDesc

添加一个节点，从其成员中创建一个 "HairGroupDesc"。

## 图示

![]($-20221218-14550841.png)

## Inputs

头发宽度： Float（单精度）。头发宽度：。头发宽度（以厘米为单位）。

发根刻度。浮动（单精度）。发根刻度：。头发在根部的宽度比例。

发尖刻度。浮点（单精度）。发梢刻度：。头发在顶端的比例。

头发阴影密度。Float（单精度）。头发阴影密度：。覆盖头发阴影密度系数（单位少）。

Hair Raytracing Radius Scale。Float（单精度）。Hair Raytracing Radius Scale：。为光线追踪效果（如阴影）缩放头发的几何半径。

使用毛发光线追踪几何学。布尔值。Use Hair Raytracing Geometry:（使用毛发光线追踪几何）。启用头发丝几何体进行光线追踪。

LODBias: Float (single-precision).LODBias:.对选定的LOD进行偏置。一个>0的值将逐步选择较低的细节点。当r.HairStrands.Cluster.Culling=1时使用。

头发长度刻度。浮动（单精度）。头发长度标度：。当启用时，长度标度允许缩放头发的长度。

## Outputs

头发组描述：头发组描述结构。
