# BreakLightmassWorldInfoSettings

添加一个节点，将'LightmassWorldInfoSettings'分解成其成员字段

## 图示

![]($-20221218-14391166.png)

## Inputs

Lightmass世界信息设置。Lightmass世界信息设置结构（按参考）。  

## Outputs

静态照明水平刻度。浮点（单精度）。静态照明等级表：。警告。将此设置为小于1会大大增加构建时间！关卡的比例相对于现实世界的比例（1虚幻单位=1厘米）。所有与比例有关的Lightmass设置的默认值都经过了调整，以便与现实世界的比例配合得更好，。任何具有不同比例的关卡都应该使用这个比例来进行补偿。对于大型关卡，将其设置为2或4可以极大地减少建造时间。

Num Indirect Lighting Bounces:整数。Num Indirect Lighting Bounces:（间接照明反弹数）。从光源开始，模拟点光源/聚光灯/定向灯的灯光反弹次数。0是直接照明，1是一个弹跳，等等。弹跳1需要花费最多的时间来计算，对视觉质量贡献最大，其次是弹跳2。连续的反弹并不真正影响建造时间，但对视觉的影响要小得多，除非材料的漫反射颜色接近于1。

Num Sky Lighting Bounces:整数。Num Sky Lighting Bounces：.模拟的天窗和发射性反弹的数量。Lightmass对天光反弹使用非分布式的辐射度方法，其成本与反弹的数量成正比。

间接照明质量。Float（单精度）。间接照明质量：。警告。可以用来增加GI解算器的样本数，以便为需要的关卡获得更高的质量。当提高质量时，降低间接照明的平滑度（IndirectLightingSmoothness）是很有用的（~.75），可以得到明确的间接阴影。请注意，这不会影响压缩伪影、UV接缝或其他基于纹理的伪影。

间接照明平滑度。Float（单精度）。间接照明平滑度：。适用于间接照明的平滑度系数。在某些照明条件下，当Lightmass不能解决准确的间接照明时，这很有用。1是默认的平滑度，针对各种照明情况进行调整。更高的值，如3，会使间接照明更加平滑，但代价是间接阴影会失去细节。

环境颜色：颜色结构。环境颜色：。代表围绕关卡上半球的恒定颜色的光，像天空一样。这个光源目前不能作为间接照明得到反弹，导致反射捕捉的亮度不正确。倾向于使用静态天窗来代替。

环境强度。Float (single-precision).环境强度：。缩放EnvironmentColor，允许独立的颜色和亮度控制。

Diffuse Boost。Float (single-precision).Diffuse Boost（漫反射增强）：。缩放场景中所有材质的漫反射贡献。

体积照明方法。EVolumeLightingMethod Enum.体积照明方法：。用于在Lightmass Importance Volume内的所有位置提供预计算的照明的技术。

使用环境遮蔽。布尔值。使用环境遮蔽：。如果为真，将启用AmbientOcclusion。

生成环境遮蔽材质遮罩：布尔值。Generate Ambient Occlusion Material Mask:.生成环境遮蔽材质蒙版。是否生成存储由Lightmass计算的AO的纹理。这些可以通过PrecomputedAOMask材质节点访问，。这对于环境资产的材质层之间的混合是很有用的。如果你只想要预计算AOMask，请确保将DirectIlluminationOcclusionFraction和IndirectIlluminationOcclusionFraction设置为0。

Visualize Material Diffuse: Boolean.可视化材料漫反射：。如果为真，则用导出的漫反射术语覆盖普通的直接和间接照明。

可视化环境遮蔽。Boolean.Visualize Ambient Occlusion:.如果为真，则仅用AO术语覆盖正常的直接和间接照明。

压缩光照图。布尔值。Compress Lightmaps:（压缩光照图）。是否压缩光照图纹理。禁用光图纹理压缩将减少伪影，但会增加4倍的内存和磁盘大小。禁用时要小心。

体积测光图细节单元尺寸。Float (single-precision).体积光影图细节单元尺寸：。以世界空间为单位，最高密度的体积光影图体素的大小（用于几何体周围）。这个设置对构建时间和内存有很大影响，请谨慎使用。将DetailCellSize减半可以增加8倍的内存。

Volumetric Lightmap Maximum Brick Memory Mb。Float (single-precision).Volumetric Lightmap Maximum Brick Memory Mb:.花在体积测光图砖块数据上的最大内存量。高密度的砖块将被丢弃，直到达到这个限制，离几何体最远的砖块首先被丢弃。

体积测光图球面谐波平滑：浮点（单精度）。Volumetric Lightmap Spherical Harmonic Smoothing：.控制在球面谐波去环过程中对体积光图样本进行多少平滑处理。每当高方向性的照明被存储在球面谐波中时，就会出现一个环形伪影，表现为对面的意外黑色区域。平滑化可以减少这种假象。平滑化只有在出现振铃假象的时候才会应用。0=无平滑，1=强平滑（照明的小方向性）。

体积小的样品放置比例。Float（单精度）。体积灯光样本放置比例：。体积光照样本放置的距离比例。体积照明样本由Lightmass计算，用于可移动组件的GI。使用较大的比例可以减少样本内存的使用，并减少间接照明缓存的更新时间，但照明区域之间的过渡不太精确。

直接光照遮蔽分数。Float（单精度）。Direct Illumination Occlusion Fraction（直接照明遮蔽分数）：。将多少AO应用于直接照明。

间接照度遮蔽分数。Float（单精度）。Indirect Illumination Occlusion Fraction（间接照明遮蔽分数）：。将多少AO应用于间接照明。

遮挡指数。Float (single-precision).遮挡指数：。较高的指数会增加对比度。

完全被遮挡的样本分数。Float (single-precision).完全闭塞的样本分数：。为了达到完全闭塞而必须闭塞的样本的分数。

最大遮挡距离。浮点（单精度）。最大遮挡距离：。一个物体对另一个物体造成遮挡的最大距离。
