# BreakSlateBrush

添加一个节点，将'SlateBrush'分解成其成员字段

## 图示

![]($-20221218-14424490.png)

## Inputs

石板刷。石板刷的结构（按参考）。  

## Outputs

图像大小。矢量2D结构。图像大小：。资源的大小，以石板为单位。

保证金。保证金结构。Margin:.在方框和边框模式中使用的边距。

色调：板岩色结构。Tint Color:.应用于图像的色调.

轮廓设置。石板刷轮廓设置结构。轮廓设置：.如何画出轮廓。目前只用于RoundedBox类型的画笔。

图像。对象参考。资源对象：.为这个画笔渲染的图像，可以是一个UTexture或UMaterialInterface或一个实现AtlasedTextureInterface的对象。

绘制为。ESlateBrushDrawType枚举。绘制为：。如何绘制图像。

铺设。ESlateBrushTileType枚举。Tiling:.如何在图像模式下对图像进行平铺。

镜像。ESlateBrushMirrorType枚举。镜像:.如何在图像模式下镜像图像。这通常只用于动态图像刷，其中源纹理。来自硬件设备，如网络摄像机。
