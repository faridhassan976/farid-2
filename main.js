
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

// إظهار وإخفاء القائمة في الشاشات الصغيرة
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// تحريك شريط المهارات
window.addEventListener('scroll', function() {
  const skills = document.querySelector('.skills');
  if (!skills) return;

  const skillsTop = skills.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (skillsTop < windowHeight - 100) {
    const skillBars = document.querySelectorAll('.skill-per');
    skillBars.forEach(skill => {
      const width = skill.getAttribute('style').match(/width: (\d+)%/)[1];
      skill.style.width = '0%';
      setTimeout(() => {
        skill.style.width = width + '%';
      }, 300);
    });
  }
});

// تصفية أعمال المحفظة
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.portfolio-filter li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // إزالة الفئة النشطة من جميع الأزرار
      filterBtns.forEach(filterBtn => {
        filterBtn.classList.remove('active');
      });
      
      // إضافة الفئة النشطة للزر المنقور
      btn.classList.add('active');
      
      const filterValue = btn.dataset.filter;
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود لإرسال النموذج
    alert('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
  });
}

// إضافة فئة نشطة للروابط في القائمة عند التمرير
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
