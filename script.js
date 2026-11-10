document.addEventListener("DOMContentLoaded", function() {
    const consultForm = document.getElementById("consultationForm");

    if (consultForm) {
        consultForm.addEventListener("submit", function(event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة
            
            const name = document.getElementById("userName").value;
            
            // إظهار رسالة تأكيد جذابة للمستخدم
            alert(`شكراً لك يا ${name}! تم استلام طلب الاستشارة بنجاح، وسيتواصل معك خبير الاستثمار الحلال خلال 24 ساعة.`);
            
            consultForm.reset(); // تفريغ الحقول بعد الإرسال
        });
    }
});
