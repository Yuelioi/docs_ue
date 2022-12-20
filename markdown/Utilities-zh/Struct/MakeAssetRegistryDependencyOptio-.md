# MakeAssetRegistryDependencyOptio-

Adds a node that create a 'AssetRegistryDependencyOptions' from its members

## 图示

![]($-20221218-14472092.png)

## Inputs

Include Soft Package References: Boolean. Include Soft Package References:. Dependencies which don't need to be loaded for the object to be used (i.e. soft object paths).

Include Hard Package References: Boolean. Include Hard Package References:. Dependencies which are required for correct usage of the source asset, and must be loaded at the same time.

Include Searchable Names: Boolean. Include Searchable Names:. References to specific SearchableNames inside a package.

Include Soft Management References: Boolean. Include Soft Management References:. Indirect management references, these are set through recursion for Primary Assets that manage packages or other primary assets.

Include Hard Management References: Boolean. Include Hard Management References:. Reference that says one object directly manages another object, set when Primary Assets manage things explicitly.  

## Outputs

Asset Registry Dependency Options: Asset Registry Dependency Options Structure.

