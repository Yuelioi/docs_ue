# BreakDisplayClus-_1

Adds a node that breaks a 'DisplayClusterConfigurationFramePostProcess_OutputRemap' into its member fields

## 图示

![]($-20221218-14335909.png)

## Inputs

Display Cluster Configuration Frame Post Process Output Remap: Display Cluster Configuration Frame Post Process Output Remap Structure (by ref).  

## Outputs

Enable Output Remapping: Boolean. Enable:. Enables or disables output remapping.

Data Source: EDisplayClusterConfigurationFramePostProcess_OutputRemapSource Enum. Data Source:. Selects either the Static Mesh or External File setting as the source for output remapping.

Static Mesh: Static Mesh Object Reference. Static Mesh:. The Static Mesh reference to use for output remapping when the Data Source is set to Static Mesh.

Mesh Component Name: String. Mesh Component Name:. The MeshComponent reference (ProceduralMeshComponent or StaticMeshComponent) to use for output remapping when the Data Source is set to Mesh Component.

External File: String. External File:. The external .obj file to use for output remapping when the Data Source is set to File.

