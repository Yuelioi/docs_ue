# MakeImportAssetParameters

Adds a node that create a 'ImportAssetParameters' from its members

## 图示

![]($-20221218-14553519.png)

## Inputs

Reimport Asset: Object Reference. Reimport Asset:. If the import is a reimport for a specific asset set the asset to reimport here.

Is Automated: Boolean. Is Automated:. Tell interchange that import is automated and it shouldn't present a model window.

Override Pipelines: Array of Interchange Pipeline Base Object References. Override Pipelines:. Adding some override will tell interchange to use the specific custom set pipelines instead of letting the user or the system chose.  

## Outputs

Import Asset Parameters: Import Asset Parameters Structure.

