# FindFiles

查找给定目录下的所有文件，并可选择文件扩展名过滤器。

目标是蓝图文件利用系统 BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-19002060.png)

## Inputs

在。执行。

目录。字符串。要搜索的目录的绝对路径。例如："C:\UnrealEditor\Pictures"。

文件扩展名。字符串。如果 FileExtension 是空字符串""，那么所有文件都会被找到。否则，FileExtension 可以是.EXT 或只是 EXT 的形式，只有具有该扩展名的文件才会被返回。

## Outputs

出：执行。

发现文件。字符串的数组。找到的与可选的 FileExtension 过滤器匹配的所有文件，如果没有指定，则为所有文件。

返回值。布尔值。如果找到任何东西，则为真，否则为假。

<hr>

Finds all the files within the given directory, with optional file extension filter.

Target is Blueprint File Utils BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-19002060.png)

## Inputs

In: Exec.

Directory: String. The absolute path to the directory to search. Ex: "C:\UnrealEditor\Pictures".

File Extension: String. If FileExtension is empty string "" then all files are found. Otherwise FileExtension can be of the form .EXT or just EXT and only files with that extension will be returned..

## Outputs

Out: Exec.

Found Files: Array of Strings. All the files found that matched the optional FileExtension filter, or all files if none was specified..

Return Value: Boolean. true if anything was found, false otherwise.
