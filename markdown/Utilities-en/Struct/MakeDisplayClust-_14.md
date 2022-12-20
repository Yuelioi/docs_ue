# MakeDisplayClust-_14

Adds a node that create a 'DisplayClusterConfigurationPostRender_GenerateMips' from its members

## 图示

![]($-20221218-14503079.png)

## Inputs

Auto Generate Mips: Boolean. Auto Generate Mips:. Generate and use mipmaps for the inner frustum. Disabling this can improve performance but result in visual artifacts on the inner frustum..

Mips Sampler Filter: TextureFilter Enum. Mips Sampler Filter:. Mips Sampler Filter.

Mips Address U: TextureAddress Enum. Mips Address U:. AutoGenerateMips sampler address mode for U channel. Defaults to clamp..

Mips Address V: TextureAddress Enum. Mips Address V:. AutoGenerateMips sampler address mode for V channel. Defaults to clamp..

Enable Maximum Number Of Mips: Boolean. Enabled Max Num Mips:. Performance: Allows a limited number of MIPs for high resolution..

Maximum Number Of Mips: Integer. Max Num Mips:. Performance: Use this value as the maximum number of MIPs for high resolution..  

## Outputs

Display Cluster Configuration Post Render Generate Mips: Display Cluster Configuration Post Render Generate Mips Structure.

