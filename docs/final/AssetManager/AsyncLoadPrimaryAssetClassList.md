# AsyncLoadPrimaryAssetClassList

将一个主要资产类别的列表加载到内存中，这将导致它们一直被加载，直到明确地卸载。当加载成功或失败时，将发生完成事件，加载的列表将包含完成时发现的所有请求的类。如果指定了 LoadBundles，这些包会和资产一起被加载。

目标是 Async Action Load Primary Asset Class List

## 图示

![](/uploads/projects/ue-bluprint/20221218-17595991.png)

## Inputs

在。执行。

主要资产列表。主要资产 ID 结构的数组。

加载捆绑物。名称的数组。

## Outputs

输出。执行：执行。

已完成。执行。已完成。

已加载。对象类引用数组。

<hr>

Load a list of primary asset classes into memory, this will cause them to stay loaded until explicitly unloaded.. The completed event will happen when the load succeeds or fails, and the Loaded list will contain all of the requested classes found at completion.. If LoadBundles is specified, those bundles are loaded along with the assets.

Target is Async Action Load Primary Asset Class List

## 图示

![](/uploads/projects/ue-bluprint/20221218-17595991.png)

## Inputs

In: Exec.

Primary Asset List: Array of Primary Asset Id Structures.

Load Bundles: Array of Names.

## Outputs

Out: Exec.

Completed: Exec. Completed.

Loaded: Array of Object Class References.
