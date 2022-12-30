# MakeDisplayClusterConfigurationI-_1

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationICVFX_CameraSettings"。

## 图示

![]($-20221218-14505411.png)

## Inputs

启用内部信托：布尔值。启用：。渲染此ICVFX摄像机的内围。

电影摄影机演员。Cine Camera Actor 软对象参考。外部摄像机演员：.为这个ICVFX摄像机指定一个摄像机演员，以代替默认的nDisplay摄像机。

内幕消息百分比。Float（单精度）。缓冲比例：。调整内壳的分辨率比例。

内层Frustum过扫描。显示集群配置ICVFX相机自定义Frustum结构。自定义Frustum：。渲染一个更大或更小的内框。

软边缘：显示集群配置 ICVFX相机软边缘结构。软边缘：。软化内壳的边缘，以帮助避免真人摄像机看到的反射中的硬线。

内部地壳旋转：旋转器。地壳旋转：。旋转内壳...

内侧的Frustum偏移。向量。Frustum Offset:.指定内壳上的偏移量。

内侧的Frustum边界。显示集群配置ICVFX相机边界结构。边界：。内壳的边框。

摄像机运动模糊：显示集群配置ICVFX摄像机运动模糊结构。相机运动模糊：。通过从摄像机运动中减去模糊，避免物理摄像机对模糊的放大，更准确地渲染运动模糊。

渲染设置。显示集群配置 ICVFX摄像机的渲染设置结构。渲染设置：.配置该视口的全局渲染设置。

Chromakey。显示集群配置 ICVFX Chromakey设置结构。Chromakey.

所有节点的OCIO配置。显示群集配置 OCIOConfiguration结构。所有节点 OCIOConfiguration:.OCIO 显示此摄像机的外观配置。

每个节点的OCIO重写。显示集群配置OCIOProfile结构的阵列。每节点OCIOProfiles:.在每个节点或节点组的基础上应用OpenColorIO配置。

所有节点的颜色分级。显示群组配置视口所有节点颜色分级结构。所有节点颜色分级：。所有节点颜色分级。

每个节点的颜色分级。显示集群配置视口每节点颜色分级结构的阵列。每节点调色：.在每个节点或节点组的基础上，对内部地壳进行高级调色操作。

从内部隐藏的内容：显示集群配置ICVFX可见性列表结构。相机隐藏列表：.此处指定的内容将不会出现在内部地壳中，但可以出现在 nDisplay 视口中。

隐藏在视窗中的内层外壳。显示群组配置群组项目参考列表结构。隐藏的ICVFX视口:.内部地壳不被渲染的视口的列表。

## Outputs

显示群组配置ICVFX摄像机设置。显示集群配置 ICVFX相机设置结构。
