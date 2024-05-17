function redirectToGreetings() {
  window.location.href = "new.html";
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // حدد التاريخ الذي تريد العد التنازلي له
  let targetYear = 2024,
    dayMonth = "05/18/",
    birthday = dayMonth + targetYear;

  const countDown = new Date(birthday).getTime() + (22 * hour) + (52 * minute), // إضافة 22 ساعة و 52 دقيقة
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

      if (distance < 0) {
        document.getElementById("headline").innerText =
            "المناسبة هي ذكرى اول مرة وجودك بحياتي شكرا كتير على كلشي حلو بحياتي بسببك اكيد مش هقبل اضيع فرحتنا وانا مش هرضى ازعلك عشان هيك عملتلك محتوى جديد احلا من الاول";
        document.getElementById("event").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        // Show additional text sections
        document.getElementById("videoText").style.display = "block";
        document.getElementById("quizText").style.display = "block";
        document.getElementById("noteText").style.display = "block";
        clearInterval(x);
    }
    }, 0);
})();
