## Demo 03 - Git stash use case

### ขั้นตอนการทำ

1. `git checkout -b demo-03-git-stash-use-case-${your-name} origin/demo-03-git-stash-use-case`.
2. Add `Overview` section above `## Step`.
3. Do not commit your work yet.
4. `git checkout demo-03-git-stash-use-case-other-branch`.
5. There will be some error.
6. `git stash` then `git merge demo-03-git-stash-use-case-other-branch`.
7. use `git stash apply`
8. commit your work.
9. run `git push -u origin demo-03-git-stash-use-case-${your-name}`

### Git stash command
| Command      | Description |
| ----------- | ----------- |
| git stash      | stash changes in working directory       |
| git stash --include-untracked    | stash changes and untracked files        |
| git stash list    | show stashed changes        |
| git stash apply    | apply the latest stashed change        |
| git stash pop    | apply the latest stashed change and remove it from stash        |
