const translations = {
  en: {
    heroTitle: "Hi, I'm Sorawit Treechot",
    heroSubtitle: "Front-end Developer",
    heroText: "I am currently a third-year student at Sripatum University. I have skills in website development and knowledge of other programming languages as well.",
    btnClick: "Click Me"
  },
  th: {
    heroTitle: "สวัสดีครับ ผมชื่อ นาย สรวิศ ตรีโชติ",
    heroSubtitle: "นักพัฒนา Front-end",
    heroText: "ตอนนี้กำลังศึกษาอยู่ปีที่ 3 ที่มหาวิทยาลัยศรีปทุม มีทักษะในการพัฒนาเว็บไซต์และมีความรู้ภาษาโปรแกรมอื่น ๆ เพิ่มเติม",
    btnClick: "กดที่นี่"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // ตั้ง active ปุ่ม
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");
}

// ตั้งค่าเริ่มต้นเป็นภาษาอังกฤษ
document.addEventListener("DOMContentLoaded", () => setLanguage('en'));