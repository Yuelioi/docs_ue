# TakeLevelSnapshotandSavetoDisk

@brief 在内容浏览器中创建一个新的水平快照资产，然后捕捉目标世界。

目标是水平快照编辑功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19423193.png)

## Inputs

在。执行。

世界语境对象。对象参考。确定在哪个世界拍摄快照的上下文对象。

文件名称。字符串。所需的资产文件名称。

文件夹路径。字符串。所需的资产位置。

描述。字符串。

应该创建唯一的文件名。布尔值。如果是 true，如果已经存在类似名称的资产，资产名称将有一个数字递增到文件名上。如果是假的，现有资产将被覆盖。

## Outputs

出：执行。

返回值。水平快照对象参考。

<hr>

@brief Creates a new Level Snapshot asset in the content browser and then captures the target world

Target is Level Snapshots Editor Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19423193.png)

## Inputs

In: Exec.

World Context Object: Object Reference. Context object to determine which world to take the snapshot in.

File Name: String. The desired asset file name.

Folder Path: String. The desired asset location.

Description: String.

Should Create Unique File Name: Boolean. If true, the asset name will have a number incrementally added to the file name if an asset with a similar name already exists. If false, the existing asset will be overwritten..

## Outputs

Out: Exec.

Return Value: Level Snapshot Object Reference.
