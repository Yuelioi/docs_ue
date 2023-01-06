# ResolveFilenameFormatArguments

通过将{format_strings}转换为主配置提供的设置来解决提供的InFormatString。

目标是电影管道蓝图库

## 图示

![]($-20221218-20095183.png)

## Inputs

在。执行。

在格式化字符串。字符串。一个格式字符串（以"{format_key1}_{format_key2}"的形式）来解决。

在Params中。电影管道文件名解析Params结构（通过ref）。用来解析格式字符串的参数。详见FMoviePipelineFilenameResolveParams属性。希望你填写所有的参数，以便它们能被用来解析字符串，否则可能会使用默认值。  

## Outputs

出：执行。

出最终路径。字符串。基于格式字符串和Resolve Params.的组合的最终文件路径。

输出合并的格式参数。电影管线格式 Args 结构。

Resolves the provided InFormatString by converting {format_strings} into settings provided by the master config.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20095183.png)

## Inputs

In: Exec.

In Format String: String. A format string (in the form of "{format_key1}_{format_key2}") to resolve..

In Params: Movie Pipeline Filename Resolve Params Structure (by ref). The parameters to resolve the format string with. See FMoviePipelineFilenameResolveParams properties for details. Expected that you fill out all of the parameters so that they can be used to resolve strings, otherwise default values may be used..  

## Outputs

Out: Exec.

Out Final Path: String. The final filepath based on a combination of the format string and the Resolve Params..

Out Merged Format Args: Movie Pipeline Format Args Structure.

