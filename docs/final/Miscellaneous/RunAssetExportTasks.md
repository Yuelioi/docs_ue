# RunAssetExportTasks

将给定的对象导出到文件。子类不覆盖这一点，但它们提供了一个 Export()函数，以完成特定资源的导出工作。

目标是出口商

## 图示

![](/uploads/projects/ue-bluprint/20221218-20060030.png)

## Inputs

在。执行。

出口任务。资产出口任务对象参考数组。要导出的任务数组。

## Outputs

出：执行。

返回值。布尔值。如果所有的任务都没有错误地运行，则为真。

<hr>

Export the given objects to files. Child classes do not override this, but they do provide an Export() function. to do the resource-specific export work.

Target is Exporter

## 图示

![](/uploads/projects/ue-bluprint/20221218-20060030.png)

## Inputs

In: Exec.

Export Tasks: Array of Asset Export Task Object References. The array of tasks to export..

## Outputs

Out: Exec.

Return Value: Boolean. true if all tasks ran without error.
