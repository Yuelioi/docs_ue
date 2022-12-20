# DeleteDirectory

Deletes a directory and all the files in it and optionally all sub-directories and files within it

Target is Blueprint File Utils BPLibrary

## 图示

![]($-20221218-19001600.png)

## Inputs

In: Exec.

Directory: String. The Directory to delete.

Must Exist: Boolean. If true, the directory must exist or the return value will be false.

Delete Recursively: Boolean. If true, all sub-directories will be deleted as well. If false and there are contents in the directory, the delete operation will fail..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the directory was succesfully deleted, false otherwise.

