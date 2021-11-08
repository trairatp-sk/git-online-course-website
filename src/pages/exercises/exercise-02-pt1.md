# Exercise 02 Part 1 - Writing self introduction page

## Overview
เรามาลองทำโปรเจคจริงๆกัน ให้แต่ละคนสร้างหน้าแนะนำตัวเองโดยทำงานโดยสร้าง branch ของตัวเองใน bitbucket และ เปิด pull request ให้พี่เข้าไปตรวจงานและลอง merge งานของเราเข้า branch master จากนั้นรอดูผลลัพธ์ในเว็บของ workshop ได้เลย!!

## ขั้นตอนการทำ

1. สร้าง branch ของตัวเอง ชื่อ `exercise-02-pt1-${nickname}` เช่น `exercise-02-pt1-sam` ผ่าน `bitbucket` โดย fork จาก branch `master`
2. checkout branch ที่เพิ่งสร้างในเครื่องตัวเอง
   ```shell
   git fetch
   git checkout exercise-02-pt1-${nickname} # เช่น git checkout exercise-02-pt1-sam
   ```
3. เปิด web server ในเครื่องตัวเองด้วยคำสั่ง
   ```shell
   npm install
   npm start
   ```
4. เปิดเว็บไปที่ `localhost:8000` ควรจะเข้าได้ (เข้าไม่ได้ถามได้เลยนะ)
5. copy `about-me.mdx` มาสร้างเป็นไฟล์แนะนำตัวเองตัวเอง โดนเปลี่ยนชื่อไฟล์เป็น `${ชื่อเล่นภาษาอังกฤษ}.mdx` เช่น `sam.mdx`
6. แก้หัวไฟล์ให้เป็นชื่อของเราเอง
    ```markdown
    ---
    title: ชื่อเล่นภาษาไทย
    slug: ชื่อเล่นภาษาอังกฤษตัวเล็กหมด ถ้ามีหลายพยางให้ใช้ - แบ่งคำเช่น khai-mook
    author: ชื่อจริง ภาษาอังกฤษ
    _nickname: ชื่อเล่นภาษาไทย
    _role: guest
    ---
    ```
    เช่น
    ```markdown
    ---
    title: สาม
    slug: sam
    author: trairat punyawatthananukool
    _nickname: สาม
    _role: guest
    ---
    ```
7. เขียนแนะนำตัวเองตาม template ภาษาที่ใช้เป็น mdx ซึ่งก็คือ markdown ที่ใส่ react component เข้าไปได้ด้วย [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
8. เข้าไปหน้าเว็บ `localhost:8000/introduce-yourself/${nickname}`  เช่น  `http://localhost:8000/introduce-yourself/sam` (มี hot reload แก้ไปดูไปได้)
9.  อยากเพิ่มอะไรก็เพิ่มได้เลย แสดงความเป็นตัวเอง
10. เสร็จแล้ว commit และ push branch ของตัวเอง
11. เปิด pull request ใน bitbucket ชื่อ `Exercise-02-pt1-${nickname}` เช่น `Exercise-02-pt1-sam`
12. แจ้งพี่ และ รอ approve และ merge งานของเราเข้า branch master
13. เข้าไปในเว็บแล้วดูว่าชื่อขึ้นหรือยัง และ เข้าไปเช็คความเรียบร้อย
14. หลังจากทุกคนทำเสร็จแล้ว ให้ไปดูเลขที่ของตัวเองในหน้าแรกของ website ในหัวข้อ attendee

### Bonus
- เขียนเป็น react ได้นะถ้าชอบ
#### การเพิ่มรูป
1. เอาไฟล์รูปไปใส่ใน src/images
2. ใส่รูปใน markdown
  ```
  ![alt text](../../images/your-image-file.png) 
  ```
[Ref](https://www.gatsbyjs.com/docs/working-with-images-in-markdown/)