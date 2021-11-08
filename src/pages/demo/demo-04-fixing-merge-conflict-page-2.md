## Demo 04 - Fixing merge conflict (Page 2)

### How git mark merge conflict in your files

Git จะใส่ `<<<<<<< HEAD`, `=======`, `>>>>>>> incoming-branch-name` ใน file ของเราเพื่อบอกว่ามี conflict ตรงนี้นะ โดย
- ส่วนที่อยู่ระหว่าง `<<<<<<< HEAD` กับ `=======` นั่นคือการเปลี่ยนแปลงของเรา 
- ส่วนที่อยู่ระหว่าง `=======`, `>>>>>>> incoming-branch-name` นั่นคือการเปลี่ยนแปลงจาก branch ที่เราทำกำลังจะ merge เข้ามาก (incoming branch)

### Example 
#### Accept Current Change
ของ**เรา**ใหม่กว่า
```
<<<<<<< HEAD
บรรทัดนี้จำเป็น
=======
บรรทัดนี้ไม่จำเป็น
>>>>>>> incoming-branch-name
```
#### Accept Incoming Change
ของ**เขา**ใหม่กว่า
```
<<<<<<< HEAD
บรรทัดนี้ไม่จำเป็น
=======
บรรทัดนี้จำเป็น
>>>>>>> incoming-branch-name
```
#### Accept Both Change
ต้องใช้ทั้งคู่
```
<<<<<<< HEAD
บรรทัดนี้จำเป็น
=======
บรรทัดนี้จำเป็น
>>>>>>> incoming-branch-name
```