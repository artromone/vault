#vcs #vcs/howto #vcs/commands #vcs/branching 

Удалить ветку:
- Локально:
	- Если была слита с другой веткой: `git branch -d new_branch`
	- Если не была слита с другой веткой: `git branch -D new_branch`
- В удаленном репозитории:
	- `git push origin :new_branch`
	- `git push origin --delete new_branch`