#vcs #vcs/arrangement #vcs/branching 

> `remote` – ссылка с локального репозитория к оригинальному. "Адрес к другому репозиторию git"

![[remote в vcs-1714658124263.jpeg]]

Выведем список всех веток `git branch --all`
```bash
remotes/origin/HEAD -> origin/master

remotes/origin/master

remotes/origin/another_fix_branch
remotes/origin/new_feature
```
Имя `remote` тут – `origin`

После выполнения `git checkout another_fix_branch` (на самом деле происходит `git checkout -b another_fix_branch remotes/origin/another_fix_branch`)...
```
Branch another_fix_branch set up to track remote branch another_fix_branch
➥ from origin.
Switched to a new branch 'another_fix_branch'
```

...есть уже две ссылки на `another_fix_branch`
> Локальная ветка теперь отслеживает удаленную ветку

![[remote в vcs-1714658233036.jpeg]]


```
$ git remote -v show
origin c:/Users/Rick/Documents/gitbook/math.git (fetch)
origin c:/Users/Rick/Documents/gitbook/math.git (push)

❯ git remote -v show  
origin  git@github.com:artromone/ginsengine.git (fetch)  
origin  git@github.com:artromone/ginsengine.git (push)
```
> `remote` может быть директорией на компьютере, или сервер в интернете

Переименовать можно: `git remote rename origin beginning`
