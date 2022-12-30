# OnMediaOpenFailed

媒体打开失败时：。当一个媒体源打开失败时被调用的委托。

这个委托只有在OpenSource / OpenUrl返回true，并且媒体后来未能异步打开的情况下才会被执行。它不会被执行，如果。OpenSource / OpenUrl返回false，表示立即失败。

@see OnMediaOpened
