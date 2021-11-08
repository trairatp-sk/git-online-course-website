# Exrcise 01 - Fix committed mistakes
## Overview
เราจะมาลองแก้งานที่มีความผิดพลาดทั้งสองที่ด้วยกัน

1. เขียนคำว่า Exercise ในหัวข้อผิด
2. มี commit ที่เผลอลบ section solution ออกไป
  
เราจะมาแก้ความผิดพลาดเหล่านี้กัน!

## ขั้นตอนการทำ
1. Clone this repository
    ```bash
    git clone https://bitbucket.org/trairatp-sk/git-bootcamp.git
    cd git-bootcamp
    ```
2. Checkout to a new branch.
   ```bash
   git checkout -b exercise-01-${nickname} origin/exercise-01 
   # เช่่น git checkout -b exercise-01-sam origin/exercise-01
   ```
3. ลองดู commit ล่าสุดใน source tree
4. จะเห็นว่ามีการลบ section solution ออกไป (เราจะถือว่า commit นั้นเป็น commit ที่ผิดพลาด)
5. เอา section solution กลับมาโดยการ `reset` หรือ `revert` commit นั้นออก
6. แก้คำว่า `Exrcise` เป็น `Exercise` ด้านบนสุด
7. stage และ commit งาน (ลองตั้ง message ตาม guideline ใน slide ดู)
8. เสร็จแล้วให้ push ขึ้น bitbucket ด้วยคำสั่่ง
   ```bash
   git push -u origin exercise-01-${nickname}
   # เช่น git push -u origin exercise-01-sam
   ```

## Solutions used to be here... 😈
