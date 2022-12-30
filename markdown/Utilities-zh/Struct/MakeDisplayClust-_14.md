# MakeDisplayClust-_14

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationPostRender_GenerateMips"。

## 图示

![]($-20221218-14503079.png)

## Inputs

自动生成Mips。Boolean.自动生成Mips:.生成并使用内部地壳的mipmaps。禁用该功能可以提高性能，但会导致内层地壳出现视觉伪影。

Mips Sampler Filter: TextureFilter Enum.Mips采样器过滤器:。Mips采样器过滤器。

Mips Address U: TextureAddress Enum.Mips Address U:.为U通道自动生成Mips采样器地址模式。默认为钳子。

Mips Address V: TextureAddress Enum.Mips Address V:.为V通道自动生成Mips采样器地址模式。默认为钳子。

启用 "最大里程数"。布尔值。启用最大点数：.性能。允许有限数量的MIPs用于高分辨率。

最大Mips数。整数。Max Num Mips:.性能。使用此值作为高分辨率的最大MIP数量。  

## Outputs

显示 Cluster Configuration Post Render Generate Mips:显示群集配置 渲染后生成Mips结构。
