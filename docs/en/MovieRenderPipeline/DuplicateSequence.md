# DuplicateSequence

Duplicates the specified sequence using a medium depth copy. Standard duplication will only duplicate. the top level Sequence (since shots and sub-sequences are other standalone assets) so this function. recursively duplicates the given sequence, shot and subsequence and then fixes up the references to. point to newly duplicated sequences.

Use at your own risk. Some features may not work when duplicated (complex object binding arrangements,. blueprint GetSequenceBinding nodes, etc.) but can be useful when wanting to create a bunch of variations. with minor differences (such as swapping out an actor, track, etc.)

This does not duplicate any assets that the sequence points to outside of Shots/Subsequences.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20082248.png)

## Inputs

In: Exec.

Outer: Object Reference. The Outer of the newly duplicated object. Leave null for TransientPackage();.

In Sequence: Movie Scene Sequence Object Reference. The sequence to recursively duplicate..  

## Outputs

Out: Exec.

Return Value: Movie Scene Sequence Object Reference. The duplicated sequence, or null if no sequence was provided to duplicate..

