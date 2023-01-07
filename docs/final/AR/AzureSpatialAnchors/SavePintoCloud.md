# SavePintoCloud

将针脚保存到云端。这将启动一个 Latent Action，将 ARPin 保存到 Azure Spatial Anchors 云服务。

目标是 Azure Spatial Anchors 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17555442.png)

## Inputs

在。执行。

ARPin：ARPin 对象参考。要保存的 ARPin。

Lifetime（寿命）。Float（单精度）。云针在云中的寿命时间，单位是秒。<=0 意味着没有过期。我不希望过期时间精确到秒。

## Outputs

已完成。执行。

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor 对象参考。云端锚点的处理。

输出结果。EAzureSpatialAnchorsResult 枚举。保存尝试的结果...

输出错误字符串。字符串。关于 OutResult 的附加信息（通常为空）。

<hr>

Save the pin to the cloud.. This will start a Latent Action to save the ARPin to the Azure Spatial Anchors cloud service.

Target is Azure Spatial Anchors Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17555442.png)

## Inputs

In: Exec.

ARPin: ARPin Object Reference. The ARPin to save..

Lifetime: Float (single-precision). The lifetime time of the cloud pin in the cloud in seconds. <= 0 means no expiration. I would not expect expiration to be accurate to the second..

## Outputs

Completed: Exec.

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference. The Cloud anchor handle..

Out Result: EAzureSpatialAnchorsResult Enum. Result of the Save attempt..

Out Error String: String. Additional information about the OutResult (often empty)..
