# RunAssetExportTask

Export the given object to file. Child classes do not override this, but they do provide an Export() function. to do the resource-specific export work.

Target is Exporter

## 图示

![]($-20221218-20055917.png)

## Inputs

In: Exec.

Task: Asset Export Task Object Reference. The task to export..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the the object was successfully exported.

