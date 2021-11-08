## Demo 04 - Fixing merge conflict

### Overview

เราจะมาดูกันว่า conflict เกิดขึ้นได้อย่างไร และ ลองแก้ไข merge conflict กัน

### Step

1. `git checkout -b demo-04-fixing-merge-conflict-${your-name}` origin/demo-04-fixing-merge-conflict.
2. `git checkout demo-04-fixing-merge-conflict-add-other-section`.
3. `git checkout demo-04-fixing-merge-conflict-${your-name}`.
4. ใช้ vscode เปิดไฟล์ `src/pages/demo/demo-04-fixing-merge-conflict-page-2.md`
5. ลองใช้ vscode แก้ merge conflict ใน example ดู
6. `git merge demo-04-fixing-merge-conflict-add-other-section`.
7. Merge conflict should happen.
8. Use our favorite git client to observer why merge conflict happened.
9. Fix the conflict by putting changes in incoming branch to page 2.
10. Push your branch using `git push -u origin demo-03-fixing-merge-conflict-${your-name}`.
