# UpdateCloudAnchorProperties

将云锚的属性保存到云中。这将启动一个Latent Action，将AzureCloudSpatialAnchor属性保存到Azure Spatial Anchors云服务。如果另一个客户端更新锚点，这可能会失败。如果发生这种情况，你将不得不调用RefreshCloudAnchorProperties以获得更新的值，然后才可能成功地更新CloudAnchorProperties。

目标是Azure空间锚点库

## 图示

![]($-20221218-18102280.png)

## Inputs

在。执行。

在Azure Cloud Spatial Anchor中。Azure云空间锚点对象参考。要更新的AzureCloudSpatialAnchor。 

## Outputs

已完成。执行。

输出结果。EAzureSpatialAnchorsResult枚举。结果枚举。

Out Error String: 字符串。关于OutResult的附加信息（通常为空）。

Save the cloud anchor's properties to the cloud.. This will start a Latent Action to save the AzureCloudSpatialAnchor properties to the Azure Spatial Anchors cloud service.. This can fail if another client updates the anchor. If that happens you will have to call RefreshCloudAnchorProperties to get the updated values before you might UpdateCloudAnchorProperties sucessfully.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-18102280.png)

## Inputs

In: Exec.

In Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference. The AzureCloudSpatialAnchor to update..  

## Outputs

Completed: Exec.

Out Result: EAzureSpatialAnchorsResult Enum. The Result enumeration..

Out Error String: String. Additional information about the OutResult (often empty)..

