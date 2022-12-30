# BreakComboButtonStyle

添加一个节点，将'ComboButtonStyle'分解成其成员字段

## 图示

![]($-20221218-14323938.png)

## Inputs

Combo Button Style。Combo Button Style结构（通过引用）。 

## Outputs

Button Style: 按钮样式。按钮风格结构。Button Style:. 用于我们的SB按钮的样式。

向下箭头图像。Slate Brush结构。Down Arrow Image:（向下箭头图像）。用于向下箭头的图像。

Shadow Offset（阴影偏移）。矢量2D结构。阴影偏移：。下箭头的阴影应该偏移多少？偏移量为0意味着没有阴影。

阴影的颜色和不透明度。线性色彩结构。阴影的颜色和不透明度：。下箭头的阴影的颜色和不透明度。只有在ShadowOffset不是(0,0)时才有效。

菜单边框笔刷。石板画笔结构。菜单边框画笔：。用来在下拉内容周围添加 "菜单边框 "的画笔。

菜单边框填充。Margin结构。菜单边框填充：。用来在下拉内容周围添加 "菜单边框 "的填充物。

内容填充。边距结构。Content Padding:（内容填充）。按钮内容填充。

向下箭头填充。边缘结构。Down Arrow Padding:（向下箭头填充）。下拉箭头的填充（如果存在下拉箭头）。

Down Arrow Align: EVerticalAlignment Enum. Down Arrow Align:。下拉箭头的垂直对齐。
