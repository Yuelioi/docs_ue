# CollapseRelativeDirectories

接受一个完整路径的字符串并消除相对路径（例如：将"... "与相邻的目录消灭）。假设所有斜线都被转换为TEXT('/')。例如，将字符串：. BaseDirectory/SomeDirectory/.../SomeOtherDirectory/Filename.ext.并将其转换为：. BaseDirectory/SomeOtherDirectory/Filename.ext。

目标是蓝图路径库

## 图示

![]($-20221218-14272391.png)

## Inputs

在路径中。字符串。 

## Outputs

输出路径。字符串。

返回值。布尔值。接受一个完整路径的字符串并消除相对路径（例如：将"... "与相邻的目录消灭）。假设所有斜线都被转换为TEXT('/')。例如，将字符串：. BaseDirectory/SomeDirectory/.../SomeOtherDirectory/Filename.ext.并将其转换为：. BaseDirectory/SomeOtherDirectory/Filename.ext。
