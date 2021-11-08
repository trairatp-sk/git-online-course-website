## Demo 07 - Git LFS
### Overview
มาลองใช้ git lfs กัน

## ✅ Prerequisite
1. Install Git lfs [Download](https://git-lfs.github.com/)
2. Run `git lfs install`

### ขั้นตอนการทำ 
1. Checkout to a new branch.
   ```
   git checkout -b demo-07-git-lfs-${nickname} origin/demo-07-git-lfs
   ```
2. ลองดู src/images จะเห็นว่ายังไม่ได้ใช้ git lfs กับรูปภาพต่างๆ
3. `git lfs track "*.png"`
4. ลองอ่านไฟล์ .gitattributes
6. `.gitattributes` และ ไฟล์รูปทุกไฟล์
7. ลองรัน `git lfs status` แล้วศึกษาไฟล์ดู
8. Commit
9. Run `git push -u origin demo-07-git-lfs-${nickname}`