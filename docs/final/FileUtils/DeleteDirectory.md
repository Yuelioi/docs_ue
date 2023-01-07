# DeleteDirectory

删除一个目录和其中的所有文件，也可以选择删除其中的所有子目录和文件。

目标是蓝图文件利用系统 BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-19001600.png)

## Inputs

在。执行。

目录。字符串。要删除的目录。

必须存在。布尔值。如果为真，该目录必须存在，否则返回值为假。

递归删除。布尔值。如果为真，所有子目录也将被删除。如果是假的，并且目录中还有内容，那么删除操作将失败。

## Outputs

出：执行。

返回值。布尔值。如果目录被成功删除，则为 true，否则为 false。

<hr>

Deletes a directory and all the files in it and optionally all sub-directories and files within it

Target is Blueprint File Utils BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-19001600.png)

## Inputs

In: Exec.

Directory: String. The Directory to delete.

Must Exist: Boolean. If true, the directory must exist or the return value will be false.

Delete Recursively: Boolean. If true, all sub-directories will be deleted as well. If false and there are contents in the directory, the delete operation will fail..

## Outputs

Out: Exec.

Return Value: Boolean. true if the directory was succesfully deleted, false otherwise.
