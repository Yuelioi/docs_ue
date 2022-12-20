# BreakSourceControlState

Adds a node that breaks a 'SourceControlState' into its member fields

## 图示

![]($-20221218-14431868.png)

## Inputs

Source Control State: Source Control State Structure (by ref).  

## Outputs

Filename: String. Filename:. Get the local filename that this state represents.

Is Valid: Boolean. Is Valid:. Indicates whether this source control state has valid information (true) or not (false).

Is Unknown: Boolean. Is Unknown:. Determine if we know anything about the source control state of this file.

Can Check In: Boolean. Can Check In:. Determine if this file can be checked in..

Can Check Out: Boolean. Can Check Out:. Determine if this file can be checked out.

Is Checked Out: Boolean. Is Checked Out:. Determine if this file is checked out.

Is Current: Boolean. Is Current:. Determine if this file is up-to-date with the version in source control.

Is Source Controlled: Boolean. Is Source Controlled:. Determine if this file is under source control.

Is Added: Boolean. Is Added:. Determine if this file is marked for add. @note if already checked in then not considered mid add.

Is Deleted: Boolean. Is Deleted:. Determine if this file is marked for delete.

Is Ignored: Boolean. Is Ignored:. Determine if this file is ignored by source control.

Can Edit: Boolean. Can Edit:. Determine if source control allows this file to be edited.

Can Delete: Boolean. Can Delete:. Determine if source control allows this file to be deleted..

Is Modified: Boolean. Is Modified:. Determine if this file is modified compared to the version in source control..

Can Add: Boolean. Can Add:. Determine if this file can be added to source control (i.e. is part of the directory. structure currently under source control).

Is Conflicted: Boolean. Is Conflicted:. Determine if this file is in a conflicted state.

Can Revert: Boolean. Can Revert:. Determine if this file can be reverted, i.e. discard changes and the file will no longer be checked-out..

Is Checked Out Other: Boolean. Is Checked Out Other:. Determine if this file is checked out by someone else.

Checked Out Other: String. Checked Out Other:. Get name of other user who this file already checked out or "" if no other user has it checked out.

