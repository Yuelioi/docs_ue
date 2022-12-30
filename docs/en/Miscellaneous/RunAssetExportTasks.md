# RunAssetExportTasks

Export the given objects to files. Child classes do not override this, but they do provide an Export() function. to do the resource-specific export work.

Target is Exporter

## 图示

![]($-20221218-20060030.png)

## Inputs

In: Exec.

Export Tasks: Array of Asset Export Task Object References. The array of tasks to export..  

## Outputs

Out: Exec.

Return Value: Boolean. true if all tasks ran without error.

