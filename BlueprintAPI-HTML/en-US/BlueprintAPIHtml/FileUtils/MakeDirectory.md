# MakeDirectory

Makes a new directory, and optionally sub-directories

Target is Blueprint File Utils BPLibrary

## 图示

![]($-20221218-19002426.png)

## Inputs

In: Exec.

Path: String. The directory path to make.

Create Tree: Boolean. If true, the entire directory tree will be created if it doesnt exist. Otherwise only the leaft most directory will be created if possible.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the directory was created, false otherwise.

