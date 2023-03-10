# MakeAutomationScreenshotOptions

添加一个节点，从其成员中创建一个'AutomationScreenshotOptions'。

## 图示

![]($-20221218-14473733.png)

## Inputs

分辨率。矢量2D结构。分辨率：。所需的截图分辨率，如果没有提供，它将使用自动化设置中的平台设置的默认值。

延迟。Float (single-precision).Delay:.在我们进行截图之前的延迟。

覆盖时间到。Float (single-precision).覆盖时间到：。覆盖世界时间、实时时间到所提供的值。将Delta Time设置为0，只影响被发送到渲染线程和材质的时间。游戏线程上的时间积累不受影响。

禁用噪声渲染功能。布尔值。禁用噪点渲染功能：。禁用抗混叠、运动模糊、屏幕空间反射、眼睛适应、色调映射和接触。阴影，因为这些功能对最终渲染的图像的噪声有很大的影响。如果你是。明确地寻找变化。

固定曝光：布尔值。Disable Tonemapping：.禁用眼睛适应并将色调贴图设置为固定的伽玛曲线。一般应开启，除非是测试色调映射或其他后期处理结果。

视图设置。自动化视图设置对象参考。视图设置：.指定自定义视图设置，以控制我们在拍摄屏幕时允许哪些渲染选项。

可视化缓冲区。名称。Visualize Buffer:.允许你对一个缓冲区进行截图，而不是默认的最终点亮的场景图像。如果你想为一个特定的GBuffer建立一个测试，那就很有用了，如果在其中引入了错误，可能会更难分辨。

宽容度。EComparisonTolerance Enum.Tolerance:.这些是容忍度的快速默认值，我们默认为低，因为一般来说，每个像素的颜色都有一些由TxAA引入的持续变化。

宽容量。比较宽容量结构。公差量：。对于每一个通道和亮度级别，你可以控制一个区域，在这个区域里，颜色被发现是基本相同的。一般来说，这是必要的，因为现代渲染技术往往会不断引入噪声来隐藏混叠。

最大局部误差。浮点数（单精度）。最大本地误差：。在你考虑了颜色公差的变化后，你现在需要控制局部可接受的误差。这取决于三角形边缘的像素是如何着色的，可能是图像的几个百分点，超出了公差水平。与MaximumGlobalError不同，MaximumLocalError的工作原理是将注意力集中在图像的一个较小的子集上。这些子集将与局部误差进行比较，以试图找出重要的变化热点，而这些热点将被全局误差所忽略。

最大全局误差。Float (single-precision).最大全局误差：。在你考虑了颜色公差的变化后，你现在需要控制可接受的总误差。这取决于三角形边缘的像素是如何着色的，可能是图像的百分之几。

忽略抗混叠。布尔值。忽略抗混叠：。如果这是真的，我们将搜索邻近的像素，寻找预期的像素，因为可能发生的情况是，像素移位了一点。

忽略颜色。布尔值。忽略颜色：。如果这是真的，我们所比较的就是场景的亮度。

## Outputs

自动化屏幕截图选项。自动化屏幕截图选项结构。
