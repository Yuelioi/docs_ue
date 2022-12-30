# MakeLiveLinkPrestonMDRFrameData

添加一个节点，从其成员中创建一个 "LiveLinkPrestonMDRFrameData"。

## 图示

![]($-20221218-14570151.png)

## Inputs

视野。浮点数（单精度）。Field Of View:（视野）。摄像机的视场，单位是度。

纵横比。Float（单精度）。纵横比：。摄像机的纵横比（宽度/高度）。

焦距。浮点数（单精度）。Focal Length:.焦距。相机的焦距。

光圈。Float（单精度）。光圈：。相机的光圈，以f档为单位。

焦点距离。浮点（单精度）。对焦距离：。相机的对焦距离，单位是厘米。只在手动对焦方式下工作。

投影模式。ELiveLinkCameraProjectionMode枚举。投影模式：。相机的投影模式（透视、正射等）。

转变。转变。变形：。框架的变换。

元数据。现场链接元数据结构。元数据：。框架的元数据.

属性值。Float (single-precision)s阵列。属性值：。在静态结构中定义的属性值。使用FLiveLinkBaseStaticData.FindPropertyValue来评估。

## Outputs

Live Link Preston MDRFrame数据。Live Link Preston MDRFrame数据结构。
