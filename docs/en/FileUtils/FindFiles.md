# FindFiles

Finds all the files within the given directory, with optional file extension filter.

Target is Blueprint File Utils BPLibrary

## 图示

![]($-20221218-19002060.png)

## Inputs

In: Exec.

Directory: String. The absolute path to the directory to search. Ex: "C:\UnrealEditor\Pictures".

File Extension: String. If FileExtension is empty string "" then all files are found. Otherwise FileExtension can be of the form .EXT or just EXT and only files with that extension will be returned..  

## Outputs

Out: Exec.

Found Files: Array of Strings. All the files found that matched the optional FileExtension filter, or all files if none was specified..

Return Value: Boolean. true if anything was found, false otherwise.

