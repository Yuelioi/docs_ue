# GetAllObjectsandValuesforKey

Find all loaded objects of the given type that have a Datasmith User Data that contains the given key and their associated values.. This is a slow operation, so editor only.

Target is Datasmith Content Blueprint Library

## 图示

![]($-20221218-18492549.png)

## Inputs

In: Exec.

Key: Name. The key to find in the Datasmith User Data..

Object Class: Object Class Reference. Class of the object on which to filter, if specificed; otherwise there's no filtering.  

## Outputs

Out: Exec.

Out Objects: Array of Object References. Output array of objects for which the Datasmith User Data match the given key..

Out Values: Array of Strings. Output array of values associated with each object in OutObjects..

