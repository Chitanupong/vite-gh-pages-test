import * as Yup from "yup";

export const signupSchema = Yup.object({
    username: Yup.string()
    .required("กรุณากรอกชื่อผู้ใช้")
    // .min(3, "ชื่อผู้ใช้อย่างน้อย 3ตัวอักษร")
    .matches(/^[a-zA-Z]{5,12}$/, "กรอกเป็นภาษาอังกฤษ 5–12 ตัว, ห้ามมี space)"),

    nickname: Yup.string()
    .required("กรุณากรอกชื่อเล่น")
    .min(3, ({value, min})=> `ชื่อผู้เล่นต้องมีอย่างน้อย ${min} ตัวอักษร ตอนนี้กรอกอยู่ ${value.length} ตัว`)
    .max(10, ({value, max})=> `ชื่อผู้เล่นต้องไม่เกิน ${max} ตัวอักษร ตอนนี้กรอกอยู่ ${value.length} ตัว`),

    password: Yup.string()
    .required("กรุณากรอกรหัสผ่าน")
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว"),

    confirmPassword: Yup.string()
    .required("กรุณายืนยันรหัสผ่าน")
    .oneOf([Yup.ref("password")], "รหัสผ่านไม่ตรงกัน"),

    age: Yup.number()
    .typeError("กรุณากรอกอายุเป็นตัวเลข")
    .min(14, "ต้องมีอายุมากกว่า 13 ปี"),

    tel: Yup.string()
    .required("กรุณากรอกเบอร์โทรศัพท์")
    .matches(/^[0-9]{10}$/, "กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก"),

    terms: Yup.boolean()
    .oneOf([true], "ต้องยอมรับเงื่อนไขก่อน")
})