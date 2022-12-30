# UpdateCloudAnchorProperties

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

