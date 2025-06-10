// تحديث السنة في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// النافذة الجانبية للهاتف المحمول
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    
    // تغيير أيقونة القائمة
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// زر التمرير لأعلى
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// تأثيرات التحريك عند التمرير
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations(); // تنفيذ مرة واحدة عند تحميل الصفحة لعناصر مرئية بالفعل

// تصفية المشاريع
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // إزالة الصنف النشط من جميع الأزرار
      filterBtns.forEach(b => b.classList.remove('active'));
      // إضافة الصنف النشط للزر المختار
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// الأسئلة الشائعة
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // التبديل بين الحالة النشطة للسؤال الحالي
      item.classList.toggle('active');
      
      // إغلاق الأسئلة الأخرى (تعليق السطور التالية إذا كنت تريد السماح بفتح أكثر من سؤال في نفس الوقت)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
}

// نسخ معلومات التواصل
const copyBtns = document.querySelectorAll('.copy-btn');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');

if (copyBtns.length && notification && notificationMessage && notificationClose) {
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-copy');
      const text = document.getElementById(type).textContent;
      
      navigator.clipboard.writeText(text)
        .then(() => {
          if (type === 'email') {
            notificationMessage.textContent = 'تم نسخ البريد الإلكتروني بنجاح!';
          } else if (type === 'phone') {
            notificationMessage.textContent = 'تم نسخ رقم الهاتف بنجاح!';
          }
          
          notification.classList.add('show');
          
          // إخفاء الإشعار بعد 3 ثوانٍ
          setTimeout(() => {
            notification.classList.remove('show');
          }, 3000);
        })
        .catch(err => {
          console.error('حدث خطأ أثناء نسخ النص: ', err);
        });
    });
  });
  
  notificationClose.addEventListener('click', () => {
    notification.classList.remove('show');
  });
}

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
    // لأغراض العرض، سنعرض إشعارًا بنجاح الإرسال
    
    notificationMessage.textContent = 'تم إرسال رسالتك بنجاح!';
    notification.classList.add('show');
    
    // إخفاء الإشعار بعد 3 ثوانٍ
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
    
    // إعادة تعيين النموذج
    contactForm.reset();
  });
}
