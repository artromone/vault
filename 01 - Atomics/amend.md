#vcs #vcs/commands

> Способ изменить последний коммит без создания нового

- Изменить сообщение последнего коммита: `git commit --amend -m "..."`

- Добавить файл в последний коммит (например, забыл): `git commit --amend --no-edit` (не будет изменено сообщение)

- Добавить сообщения к коммиту: `git commit --amend -m "Fixed commit" -m "Second paragraph" -m "Wall of text"`
	- `-m "Fixed commit"` задает основное сообщение коммита
	- `-m "Second paragraph"` добавляет второй параграф к сообщению коммита
	- `-m "Wall of text"` добавляет третий параграф к сообщению коммита
