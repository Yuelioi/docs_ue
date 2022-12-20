# CollapseRelativeDirectories

Takes a fully pathed string and eliminates relative pathing (eg: annihilates ".." with the adjacent directory).. Assumes all slashes have been converted to TEXT('/').. For example, takes the string:. BaseDirectory/SomeDirectory/../SomeOtherDirectory/Filename.ext. and converts it to:. BaseDirectory/SomeOtherDirectory/Filename.ext

Target is Blueprint Paths Library

## 图示

![]($-20221218-14272391.png)

## Inputs

In Path: String.  

## Outputs

Out Path: String.

Return Value: Boolean. Takes a fully pathed string and eliminates relative pathing (eg: annihilates ".." with the adjacent directory).. Assumes all slashes have been converted to TEXT('/').. For example, takes the string:. BaseDirectory/SomeDirectory/../SomeOtherDirectory/Filename.ext. and converts it to:. BaseDirectory/SomeOtherDirectory/Filename.ext.

