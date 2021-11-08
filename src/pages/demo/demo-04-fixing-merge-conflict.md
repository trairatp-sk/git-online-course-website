# Demo 04 - Fixing merge conflict

# Overview

เราจะมาดูกันว่า conflict เกิดขึ้นได้อย่างไร และ ลองแก้ไข merge conflict กัน

## Step

1. `git checkout -b demo-04-fixing-merge-conflict-${your-name}` origin/demo-04-fixing-merge-conflict.
2. `git checkout demo-04-fixing-merge-conflict-add-other-section`.
3. `git checkout demo-04-fixing-merge-conflict-${your-name}`.
4. `git merge demo-04-fixing-merge-conflict-add-other-section`.
5. Merge conflict should happen.
6. Use our favorite git client to observer why merge conflict happened.
7. Fix the conflict by putting changes in incoming branch to page 2.
8. Push your branch using `git push -u origin demo-03-fixing-merge-conflict-${your-name}`.

## How to fix merge conflict vs code

1. ไปที่ `source control`.
2. ไฟล์ที่มี merge conflict จะอยู่ในหัวข้อ `merge changes`
3. คลิกไฟล์ที่จะแก้ merge conflict
4. ตรงที่มี merge conflict จะมี highlight 
5. ให้กด `Accept current change`, `Accept incoming change`, `Accept both changes`
6. กด save

## How git mark merge conflict in your files

Git จะใส่ `<<<<<<< HEAD`, `=======`, `>>>>>>> incoming-branch-name` ใน file ของเราเพื่อบอกว่ามี conflict ตรงนี้นะ โดย
- ส่วนที่อยู่ระหว่าง `<<<<<<< HEAD` กับ `=======` นั่นคือการเปลี่ยนแปลงของเรา 
- ส่วนที่อยู่ระหว่าง `=======`, `>>>>>>> incoming-branch-name` นั่นคือการเปลี่ยนแปลงจาก branch ที่เราทำกำลังจะ merge เข้ามาก (incoming branch)

### Example 
```
<<<<<<< HEAD
this is some content to mess with
content to append
=======
totally different content to merge later
>>>>>>> incoming-branch-name
```

