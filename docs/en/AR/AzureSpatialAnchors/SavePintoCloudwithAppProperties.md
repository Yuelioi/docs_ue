# SavePintoCloudwithAppProperties

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

