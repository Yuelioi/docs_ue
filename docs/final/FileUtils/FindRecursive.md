# FindRecursive

查找给定目录和任何子目录中的所有文件和/或目录。可以用一个可选的文件扩展名过滤器来查找文件。

目标是蓝图文件利用系统BPLibrary

## 图示

![]($-20221218-19002191.png)

## Inputs

在。执行。

启动目录。字符串。开始搜索的目录的绝对路径。例如："C:\UnrealEditor\Pictures"。

通配符。字符串。通配符，可用于查找名称中带有特定文字的文件或目录。例如，.png用于查找所有以png扩展名结尾的文件，images*用于查找任何带有 "images "字样的文件。 否则，FileExtension可以是.EXT或只是EXT的形式，只有带有该扩展名的文件会被返回。不适用于目录。

查找文件。布尔值。是否查找文件。

查找目录。布尔型。是否查找目录。  

## Outputs

出：执行。

找到的路径。字符串的数组。找到的所有路径（目录和/或文件）。

返回值。布尔值。如果找到任何东西，则为真，否则为假。

Finds all the files and/or directories within the given directory and any sub-directories. Files can be found with anoptional file extension filter.

Target is Blueprint File Utils BPLibrary

## 图示

![]($-20221218-19002191.png)

## Inputs

In: Exec.

Start Directory: String. The absolute path to the directory to start the search. Ex: "C:\UnrealEditor\Pictures".

Wildcard: String. Wildcard that can be used to find files or directories with specific text in their name. E.g .png to find all files ending with the png extension, images* to find anything with the word "images" in it Otherwise FileExtension can be of the form .EXT or just EXT and only files with that extension will be returned. Does not apply to directories.

Find Files: Boolean. Whether or not to find files.

Find Directories: Boolean. Whether or not to find directories.  

## Outputs

Out: Exec.

Found Paths: Array of Strings. All the paths (directories and/or files) found.

Return Value: Boolean. true if anything was found, false otherwise.

