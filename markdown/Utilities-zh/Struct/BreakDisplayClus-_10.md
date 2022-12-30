# BreakDisplayClus-_10

添加一个打破'DisplayClusterConfigurationICVFX_ChromakeyRenderSettings'的节点到其成员字段中。

## 图示

![]($-20221218-14335997.png)

## Inputs

显示集群配置ICVFX Chromakey 渲染设置。显示集群配置ICVFX Chromakey 渲染设置结构（通过参考）。 

## Outputs

使用自定义Chromakey：布尔值。启用：。设置为 "True"，以使用自定义Chromakey内容。

替换相机视口。Boolean（布尔）。Replace Camera Viewport:.替换相机视口。替换此chromakey RTT的相机视口的纹理。

自定义尺寸。显示集群配置ICVFX自定义尺寸结构。自定义尺寸:。性能。对chromakey RTT帧使用自定义尺寸（低分辨率）。默认尺寸与摄像机帧相同。

自定义Chromakey内容。显示集群配置ICVFX可见度列表结构。只显示列表：。这里指定的内容将被覆盖，以使用指定的chromakey颜色，并包括chromakey标记（如果启用）。

替换。显示群组配置后渲染覆盖结构。替换：。从源纹理替换视口渲染。

Post Process Blur（后处理模糊）：Display Cluster Configuration（显示集群配置）Post Render Blur Postprocess（后处理）结构。Postprocess Blur:。对自定义Chromakey内容应用模糊处理。

生成Mips。Display Cluster Configuration Post Render Generate Mips Structure. 生成Mips。

高级渲染设置。Display Cluster Configuration ICVFX Overlay Advanced Render Settings Structure. 高级渲染设置：. 高级渲染设置。
