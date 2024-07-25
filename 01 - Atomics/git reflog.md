#vcs #vcs/commands 

> История изменения ссылок (переключения между ветками, слияния, отмены, ...)

```
a0a2d3f (HEAD -> master) HEAD@{0}: commit: add feature
9d63c5b HEAD@{1}: commit: fix bug
e5a4b6c HEAD@{2}: commit (initial): initial commit
```

Можно вернуться к состоянию репозитория: [git checkout](Сбросить%20файл%20до%20последнего%20закомиченного%20состояния%20(git%20checkout)) `HEAD@{1}`

<span class="symbols-prettifier-unclear">!</span>  Можно сделать этот коммит последним и отбросить все последующие изменения: [[git reset]] `--hard HEAD@{1}`

