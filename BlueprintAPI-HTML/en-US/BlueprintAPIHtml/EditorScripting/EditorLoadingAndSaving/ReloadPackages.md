# ReloadPackages

Helper function that attempts to reload the specified top-level packages.

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18494554.png)

## Inputs

In: Exec.

Packages to Reload: Array of Package Object References. The list of packages that should be reloaded.

Interaction Mode: EReloadPackagesInteractionMode Enum. Whether the function is allowed to ask the user questions (such as whether to reload dirty packages).  

## Outputs

Out: Exec.

Out Any Packages Reloaded: Boolean. True if the set of loaded packages was changed.

Out Error Message: Text. An error message specifying any problems with reloading packages.

