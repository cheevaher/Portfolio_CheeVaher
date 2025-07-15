// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // เปิดโหมดมืดแบบใช้ class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ตรวจสอบทุกไฟล์ใน src
  ],
  theme: {
    extend: {
      maxWidth: {
        '9xl': '1600px', // เพิ่ม max-w-9xl ให้ใช้ได้ในโปรเจกต์
      },
    },
  },
  plugins: [],
}
