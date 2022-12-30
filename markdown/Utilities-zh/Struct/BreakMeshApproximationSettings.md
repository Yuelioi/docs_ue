# BreakMeshApproximationSettings

添加一个节点，将'MeshApproximationSettings'分解为其成员字段

## 图示

![]($-20221218-14395409.png)

## Inputs

网格逼近设置。网格逼近设置结构（按参考）。  

## Outputs

输出类型。EMeshApproximationType枚举。输出类型：。网格逼近过程中的输出类型。

近似精度（米）。Float（单精度）。逼近精度：。以米为单位的近似精度，将决定（例如）体素分辨率。

钳制体素尺寸。整数。Clamp Voxel Dimension:.沿着主要方向允许的最大体素数。这是对ApproximationAccuracy的一个限制。最大为1290（1290^3是<2^31的最后一个整数，使用更大的数字会导致TAURAY代码和其他地方的失败）。

尝试自动增稠。布尔值。尝试自动加厚：。如果启用，我们将尝试自动加厚薄的部件或平板。

目标最小厚度乘数。浮点（单精度）。目标最小厚度乘数：。用于自动增厚的近似精度的乘数。

忽略细小的部分。布尔型。忽略小零件：。如果启用，微小部件将被排除在网格合并之外，这可以提高性能。

小巧的零件尺寸乘法器。浮点数（单精度）。Tiny Part Size Multiplier:（微小部件尺寸乘数）。近似精度的乘数，用于定义微小部件的阈值，使用最大边界盒尺寸。

基本封顶。EMeshApproximationBaseCappingType枚举。Base Capping:.可选的方法，尝试关闭开放网格的底部。

绕组阈值。浮点（单精度）。缠绕阈值：。缠绕阈值控制开放网格边界的孔洞填充。较小的值意味着 "更多/更圆 "的填充。

填补空隙。布尔型。填补空隙：。如果为真，拓扑扩展/收缩被用来尝试填补物体之间的小间隙。

间隙填充距离（米）。Float（单精度）。间隙距离：。以米为单位展开/收缩以填补间隙的距离。

遮挡方法。EOccludedGeometryFilteringPolicy Enum.遮挡方法：。要应用的隐藏几何体移除类型。

从底部闭塞。Boolean.从底部闭塞：。如果为true，那么OcclusionMethod的计算会被配置为尝试将朝下的 "底部 "几何体视为遮挡。

简化方法。EMeshApproximationSimplificationPolicy枚举。简化方法：。网格简化标准。

目标Tri计数。整数。Target Tri Count：。网格简化的目标三角形数，用于使用计数的简化方法。

Triangles Per M: Float（单精度）。Triangles Per M:.每平方米三角形的大致数量，用于使用这种约束的简化方法。

几何偏差（米）。Float（单精度）。几何偏差：。当SimplifyMethod包含一个几何公差时，允许的几何偏差，单位是米。

地面剪裁。EMeshApproximationGroundPlaneClippingPolicy Enum.Ground Clipping:.配置最终的网格应该如何与地平面进行剪切，如果需要的话。

地面剪裁ZHeight。Float（单精度）。Ground Clipping ZHeight:（地面剪切Z高度）。地面剪切平面的Z-高度，如果启用的话。

估计硬规范。Boolean.估计硬法线：。如果为真，将使用法线角度来估计硬法线。

硬法线角度。Float（单精度）。硬法线角度。

UVGeneration方法。EMeshApproximationUVGenerationPolicy枚举。UV生成方法：。网格UV生成设置。

初始补丁计数。整数。初始补丁数：。在计算岛屿合并之前，网格被分割成的初始补丁的数量。

曲率对齐。Float（单精度）。Curvature Alignment:.曲率对齐。这个参数控制初始贴片与网格中折痕的对齐。

合并阈值。Float (single-precision).合并阈值：。岛屿合并的失真/拉伸阈值--较大的数值会增加允许的UV拉伸。

最大角度偏差。浮点（单精度）。最大角度偏差：。如果UV岛的平均面法线的偏差大于这个量，就不会被合并。

生成支持纳米技术的网格。布尔型。生成纳米网状结构：。是否生成支持纳米的网格。

Nanite Proxy Triangle Percent。Float (single-precision).Nanite Proxy Triangle Percent:.从Nanite网格生成粗略的代理网格时要减少的三角形百分比。

支持光线追踪。布尔型。Support Ray Tracing:（支持光线追踪）。这个网格是否支持光线追踪。如果生成的网格只在远处渲染，则禁用此选项以节省内存。

允许距离字段。布尔型。Allow Distance Field:（允许距离场）。是否允许计算这个网格的距离场。如果生成的网格只在距离范围内渲染，请禁用此选项以节省内存。

多重采样AA：整数。多重采样AA：。如果值大于1，多采样输出在每个方向上都以这个数量烘烤纹理（例如4==16倍超采样）。

渲染捕获分辨率。整数。渲染捕捉分辨率：。如果数值为0，使用MaterialSettings分辨率，否则就覆盖渲染捕捉分辨率。

材料设置。材料代理设置结构。材料设置：。材料生成设置。

捕获视场。Float (single-precision).捕获视场。

近平面距离。Float（单精度）。近平面距离

使用Render LODMeshes。Boolean.使用Render LODMeshes：。如果为true，则使用LOD0渲染网格（或Nanite Fallback网格）来代替源网格数据。这可以大大减少计算时间和内存使用量，但有可能以降低输出质量为代价。

启用简化预传递。布尔值。启用简化预处理：。如果为真，将使用更快的网格简化策略。这可以大大减少计算时间和内存的使用，但有可能以降低输出质量为代价。

启用平行烘烤。布尔值。Enable Parallel Baking（启用并行烘焙）：。如果是假的，纹理捕捉和烘焙将在网格生成后串行进行，而不是尽可能地并行进行。这将减少进程的最大内存需求。

打印调试信息。布尔型。打印调试信息：。如果为真，打印出调试信息。

发出完整的调试网格。布尔值。放出完整的调试网格：。如果为true，写出用于生成网格的完整网格三角集（即扁平化的、非静态的）。警告：这个资产可能非常大！！。
