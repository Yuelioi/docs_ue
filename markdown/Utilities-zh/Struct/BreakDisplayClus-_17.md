# BreakDisplayClus-_17

添加一个打破'DisplayClusterConfigurationPostRender_GenerateMips'的节点到其成员字段中

## 图示

![]($-20221218-14340621.png)

## Inputs

Display Cluster Configuration Post Render Generate Mips。Display Cluster Configuration Post Render Generate Mips 结构（通过引用）。 

## Outputs

自动生成Mips。布尔值。Auto Generate Mips:.自动生成Mips 生成并使用内部地壳的mipmaps。禁用这个功能可以提高性能，但会导致内层地壳出现视觉伪影。

Mips采样器过滤器。TextureFilter Enum. Mips Sampler Filter:. Mips Sampler Filter.

Mips Address U: TextureAddress Enum. Mips Address U:. 为U通道自动生成Mips采样器地址模式。默认为钳子。

Mips Address V: TextureAddress Enum. Mips Address V:. 为V通道自动生成Mips采样器地址的模式。默认情况下是钳制。

Enable Maximum Number Of Mips: Boolean（布尔）。Enabled Max Num Mips:. 性能。允许有限数量的MIPs以获得高分辨率。

Maximum Number of Mips: 整数。Max Num Mips:. 性能。使用此值作为高分辨率的最大MIP数量。
