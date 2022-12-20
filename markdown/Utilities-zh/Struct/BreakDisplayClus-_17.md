# BreakDisplayClus-_17

Adds a node that breaks a 'DisplayClusterConfigurationPostRender_GenerateMips' into its member fields

## 图示

![]($-20221218-14340621.png)

## Inputs

Display Cluster Configuration Post Render Generate Mips: Display Cluster Configuration Post Render Generate Mips Structure (by ref).  

## Outputs

Auto Generate Mips: Boolean. Auto Generate Mips:. Generate and use mipmaps for the inner frustum. Disabling this can improve performance but result in visual artifacts on the inner frustum..

Mips Sampler Filter: TextureFilter Enum. Mips Sampler Filter:. Mips Sampler Filter.

Mips Address U: TextureAddress Enum. Mips Address U:. AutoGenerateMips sampler address mode for U channel. Defaults to clamp..

Mips Address V: TextureAddress Enum. Mips Address V:. AutoGenerateMips sampler address mode for V channel. Defaults to clamp..

Enable Maximum Number Of Mips: Boolean. Enabled Max Num Mips:. Performance: Allows a limited number of MIPs for high resolution..

Maximum Number Of Mips: Integer. Max Num Mips:. Performance: Use this value as the maximum number of MIPs for high resolution..

