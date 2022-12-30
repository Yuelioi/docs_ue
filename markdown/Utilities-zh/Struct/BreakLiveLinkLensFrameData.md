# BreakLiveLinkLensFrameData

添加一个节点，将'LiveLinkLensFrameData'分解成其成员字段

## 图示

![]($-20221218-14392048.png)

## Inputs

活体链接镜头框架数据。Live Link镜头框架数据结构（通过参考）。  

## Outputs

失真参数。Float (single-precision)s数组。失真参数：。失真模型所使用的参数。

Fx Fy:矢量二维结构。Fx Fy:.失真模型所使用的归一化焦距。

图像中心。矢量二维结构。主点：。图像的归一化中心，范围为[0.0f, 1.0f]。

视野。浮点数（单精度）。Field Of View:（视野）。摄像机的视场，单位是度。

纵横比。Float（单精度）。纵横比：。摄像机的纵横比（宽度/高度）。

焦距。浮点数（单精度）。Focal Length:.焦距。摄像机的焦距。

光圈。Float（单精度）。光圈：。相机的光圈，以f档为单位。

焦点距离。浮点（单精度）。对焦距离：。相机的对焦距离，单位是厘米。只在手动对焦方式下工作。

投影模式。ELiveLinkCameraProjectionMode枚举。投影模式：。相机的投影模式（透视、正射等）。

转变。转变。变形：。框架的变换。

元数据。现场链接元数据结构。元数据：。框架的元数据.

属性值。Float (single-precision)s阵列。属性值：。在静态结构中定义的属性值。使用FLiveLinkBaseStaticData.FindPropertyValue来评估。
