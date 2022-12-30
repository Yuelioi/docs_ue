# BreakDisplayClus-_7

添加一个节点，将'DisplayClusterConfigurationICVFX_CameraSettings'分解成其成员字段。

## 图示

![]($-20221218-14342050.png)

## 输入

显示集群配置ICVFX摄像机设置。显示集群配置ICVFX相机设置结构(通过参考)。 

## 输出

Enable Inner Frustum: 布尔值。启用：。渲染此ICVFX摄像机的内部地壳。

摄像机演员。Cine Camera Actor Soft Object Reference. External Camera Actor:.外部摄像机演员。为此 ICVFX 摄像机指定一个摄像机演员，以代替默认的 nDisplay 摄像机。

内部屏幕百分比。Float（单精度）。缓冲比例：。调整内围屏的分辨率比例。

Inner Frustum Overscan: 显示集群配置 ICVFX摄像机自定义Frustum结构。Custom Frustum:. 渲染一个更大或更小的内框。

软边缘：显示集群配置ICVFX摄像机软边缘结构。软边缘：。软化内框的边缘，以帮助避免真人摄像机看到的反射中的硬线。

内壳旋转。旋转器。壳旋转：。旋转内壳。

Inner Frustum Offset: 向量。Frustum Offset:. 指定内壳的偏移量。

内壳边界。显示集群配置 ICVFX摄像机边界结构。边界：。内壳的边框。

相机运动模糊：显示集群配置ICVFX相机运动模糊结构。相机运动模糊：。通过从摄像机运动中减去模糊，避免物理摄像机对模糊的放大，更准确地渲染运动模糊。

渲染设置。显示群组配置 ICVFX摄像机渲染设置结构。渲染设置：. 配置此视口的全局渲染设置。

Chromakey: Display Cluster Configuration ICVFX Chromakey Settings Structure. Chromakey.

All Nodes OCIO Configuration: 显示集群配置 OCIOConfiguration 结构。所有节点 OCIOConfiguration:. OCIO 显示此摄像机的外观配置。

每个节点的OCIO重写。显示集群配置 OCIOProfile 结构的阵列。每节点 OCIOProfiles:. 在每个节点或节点组的基础上应用OpenColorIO配置。

所有节点的颜色分级。Display Cluster Configuration Viewport All Nodes Color Grading Structure. 所有节点颜色分级：. 所有节点颜色分级。

每个节点的颜色分级。显示集群配置视口每节点颜色分级结构的阵列。Per Node Color Grading:.每个节点调色：。在每个节点或节点组的基础上对内壳进行高级调色操作。

从内壳隐藏的内容：显示集群配置ICVFX可见性列表结构。相机隐藏列表：。此处指定的内容将不会出现在内部地壳中，但可以出现在 nDisplay 视口中。

Inner Frustum Hidden In Viewports: Display Cluster Configuration Cluster Item Reference List Structure. Hidden ICVFXViewports:. 内部地壳不被渲染的视口的列表。
