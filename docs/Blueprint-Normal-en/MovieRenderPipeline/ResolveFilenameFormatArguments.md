# ResolveFilenameFormatArguments

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

