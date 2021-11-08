## Demo 05 - Rebasing
### Overview
จาก [Demo-02](/demos/02-fixing-mistake) เราใช้ `git reset` ลบ commit ล่าสุดได้ แต่เราจะไม่สามารถลบ commit ที่อยู่ตรงกลางได้ เราจะมาลองใช้คำสั่ง rebase เพื่อลบ commit ที่อยู่ตรงกลางกัน
### ขั้นตอนการทำ 
1. Checkout to a new branch.
   ```
   git checkout -b demo-05-rebase-${nickname} origin/demo-05-rebase
   ```
2. ลองดู commit ใน branch นี้
3. จะเห็นว่ามี commit ที่ชื่อว่า `(Unwanted commit) Add square function` เหมือนกับ [Demo-02](/demos/02-fixing-mistake) แต่ commit อยู่ตรงกลาง ทำให้ไม่สามารถใช้ `git reset` ได้
4. ใช้คำสั่ง 
   ```
   git rebase --onto demo-05-rebase-${nickname}~2 demo-05-rebase-${nickname}~1 demo-05-rebase-${nickname}
   ```
5. Commit your work.
6. Run `git push -u origin demo-05-rebase-${nickname}`