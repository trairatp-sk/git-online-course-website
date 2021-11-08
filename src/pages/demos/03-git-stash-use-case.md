## Demo 03 - Git stash use case

### Overview
บางครั้งเวลาเราทำงานอยู่ เราก็ต้องการที่จะเปลี่ยน commmit ไปที่ commit อื่น ตัวอย่างเช่น เรากำลังทำงานอยู่ เพื่อนทำการ push code แล้วเราต้องการงานที่เค้าทำมาไว้ในเครื่องเรา เราก็ทำการ `git pull` ซึ่งถ้างานที่เราทำอยู่อยู่ไฟล์เดียวกับที่เพื่อนเราทำ อาจจะทำให้ขึ้น error ว่า
```
Your local changes to the following files would be overwritten by merge
```
เราสามารถ git stash เพื่อเก็บ uncommited change ไว้ก่อนได้

### Git stash command
| Command      | Description |
| ----------- | ----------- |
| git stash      | stash changes in working directory       |
| git stash --include-untracked    | stash changes and untracked files        |
| git stash list    | show stashed changes        |
| git stash apply    | apply the latest stashed change        |
| git stash pop    | apply the latest stashed change and remove it from stash        |

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
