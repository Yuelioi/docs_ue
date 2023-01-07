# ConstructCloudAnchor

构建一个针的云锚。这还没有存储在云中。

目标是 Azure 空间锚点库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18100840.png)

## Inputs

在。执行。

ARPin: ARPin 对象参考。用于创建锚点的 ARPin。

## Outputs

输出。Exec.

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor 对象参考。云锚柄。(如果失败则为空）。

输出结果。EAzureSpatialAnchorsResult 枚举。结果枚举。

Out Error String: 字符串。关于 OutResult 的附加信息（通常为空）。

<hr>

Construct a cloud anchor for the pin. This is not yet stored in the cloud.

Target is Azure Spatial Anchors Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18100840.png)

## Inputs

In: Exec.

ARPin: ARPin Object Reference. The ARPin to create an anchor for..

## Outputs

Out: Exec.

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference. The Cloud anchor handle. (null if fails).

Out Result: EAzureSpatialAnchorsResult Enum. The Result enumeration..

Out Error String: String. Additional informatiuon about the OutResult (often empty)..
