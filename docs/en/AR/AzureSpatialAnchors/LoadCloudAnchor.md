# LoadCloudAnchor

Load a pin from the cloud... This will start a Latent Action to load a cloud anchor and create a pin for it.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-17555325.png)

## Inputs

In: Exec.

Cloud Identifier: String. The Azure Cloud Spatial Anchor Identifier of the cloud anchor we will try to load..

Pin Id: String. Specify the name of the Pin to load into. Will fail if a pin of this name already exists. If empty an auto-generated id will be used..  

## Outputs

Completed: Exec.

Out ARPin: ARPin Object Reference. Filled in with the pin created, if successful..

Out Azure Cloud Spatial Anchor: Azure Cloud Spatial Anchor Object Reference. Filled in with the UE representation of the cloud spatial anchor created, if successful..

Out Result: EAzureSpatialAnchorsResult Enum. The Result enumeration..

Out Error String: String. Additional informatiuon about the OutResult (often empty)..

