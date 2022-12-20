# TakeLevelSnapshotandSavetoDisk

@brief Creates a new Level Snapshot asset in the content browser and then captures the target world

Target is Level Snapshots Editor Function Library

## 图示

![]($-20221218-19423193.png)

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

