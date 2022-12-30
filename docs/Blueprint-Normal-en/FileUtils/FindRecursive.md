# FindRecursive

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

