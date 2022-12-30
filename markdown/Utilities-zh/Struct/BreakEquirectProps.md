# BreakEquirectProps

添加一个节点，将'EquirectProps'分解成其成员字段

## 图示

![]($-20221218-14355369.png)

## Inputs

Equirect Props。Equirect Props结构（通过引用）。 

## Outputs

Left UVRect: 盒子2D结构。Left UVRect:。左侧源纹理UVRect，指定输入纹理中对应于左眼的部分。

Right UVRect：盒状2D结构。Right UVRect:.右UVRect。右侧源纹理UVRect，指定输入纹理中与右眼对应的部分。

Left Scale（左比例）。Vector 2D结构。Left Scale（左比例）：。左眼的纹理坐标映射到2D后的比例。

Right Scale（右尺度）：向量2D结构。矢量2D结构。Right Scale:. 右眼的纹理坐标在映射到2D后的比例。

Left Bias: 矢量二维结构。Left Bias:（左偏差）。左眼的纹理坐标在映射到2D后的偏差。

Right Bias: 矢量2D结构。Right Bias:（右偏置）。右眼的纹理坐标在映射到2D后的偏差。
