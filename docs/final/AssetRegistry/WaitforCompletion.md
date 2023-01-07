# WaitforCompletion

等待扫描完成。如果在编辑器启动时，在 OnPostEngineInit 之前调用，并且有任何资产使用了尚未加载的插件模块中的类，WaitForCompletion 将无声地返回，这些资产仍然没有被收集。

目标是资产注册表

## 图示

![](/uploads/projects/ue-bluprint/20221218-18011696.png)

## Inputs

在。执行。

目标。资产注册表接口。

## Outputs

输出。执行。

<hr>

Wait for scan to be complete. If called during editor startup before OnPostEngineInit, and there are any assets that use classes in. not-yet-loaded plugin modules, WaitForCompletion will return silently with those assets still ungathered.

Target is Asset Registry

## 图示

![](/uploads/projects/ue-bluprint/20221218-18011696.png)

## Inputs

In: Exec.

Target: Asset Registry Interface.

## Outputs

Out: Exec.
