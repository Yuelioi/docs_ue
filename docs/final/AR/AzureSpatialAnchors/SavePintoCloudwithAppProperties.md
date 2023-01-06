# SavePintoCloudwithAppProperties

将针脚保存到云端。这将启动一个Latent Action，将ARPin保存到Azure Spatial Anchors云服务。

目标是Azure Spatial Anchors库

## 图示

![]($-20221218-17555558.png)

## Inputs

在。执行。

ARPin：ARPin对象参考。要保存的ARPin。

Lifetime（寿命）。Float（单精度）。云针在云中的寿命时间，单位是秒。<=0意味着没有过期。我不希望过期时间精确到秒。

在应用程序属性中。字符串到字符串的映射。将与锚一起存储到云中的字符串的键值对。使用它们可以将应用程序的特定信息附加到锚上。 

## Outputs

已完成。执行。

出Azure云空间锚点。Azure Cloud Spatial Anchor对象参考。云计算锚点处理。

输出结果。EAzureSpatialAnchorsResult枚举。保存尝试的结果...

输出错误字符串。字符串。关于OutResult的附加信息（通常为空）。

Save the pin to the cloud.. This will start a Latent Action to save the ARPin to the Azure Spatial Anchors cloud service.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-17555558.png)

## Inputs

In: Exec.

ARPin: ARPin Object Reference. The ARPin to save..

Lifetime: Float (single-precision). The lifetime time of the cloud pin in the cloud in seconds. <= 0 means no expiration. I would not expect expiration to be accurate to the second..

In App Properties: Map of Strings to Strings. Key-Value pairs of strings that will be stored to the cloud with the anchor. Use them to attach app-specific information to an anchor..  

## Outputs

Completed: Exec.

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference. The Cloud anchor handle..

Out Result: EAzureSpatialAnchorsResult Enum. Result of the Save attempt..

Out Error String: String. Additional information about the OutResult (often empty)..

