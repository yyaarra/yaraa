(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "05/17/",
    // تحديد التاريخ والوقت لانتهاء العد التنازلي بتوقيت 24 ساعة
    birthday = dayMonth + yyyy + " 22:52:00";

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear + " 22:52:00";
  }

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

      if (distance < 0) {
        document.getElementById("headline").innerText =
          "المناسبة هي سنة على اول مرة حكينا فيها بقدرش افوتها بدون ما اشكرك على كل موقف حلو وكل مرة ضحكت فيها بسببك واشكرك على وجودك احلا حد بحياتي كلها ";
        document.getElementById("event").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        // Show additional text sections
        document.getElementById("videoText").style.display = "block";
        document.getElementById("quizText").style.display = "block";
        document.getElementById("noteText").style.display = "block";
        clearInterval(x); // إيقاف العداد المتسلسل بمجرد انتهاء العد التنازلي
      }
    }, 0);
})();
