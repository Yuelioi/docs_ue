# LoadCloudAnchor

从云端加载一个引脚... 这将启动一个Latent Action来加载一个云锚，并为它创建一个针。

目标是Azure空间锚点库

## 图示

![]($-20221218-17555325.png)

## Inputs

在。执行。

云标识符。字符串。我们将尝试加载的云锚的Azure云空间锚标识符。

引脚标识。字符串。指定要加载的引脚的名称。如果该名称的引脚已经存在，则会失败。如果为空，将使用自动生成的ID。 

## Outputs

已完成。Exec.

Out ARPin: ARPin对象参考。如果成功的话，用创建的引脚来填充。

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference。填写创建的云空间锚的UE表示，如果成功。

输出结果。EAzureSpatialAnchorsResult枚举。结果枚举。

Out Error String: 字符串。关于OutResult的附加信息（通常为空）。
