var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    // 모든 슬라이드를 숨김 처리합니다.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 슬라이드 인덱스를 증가시킵니다.
    slideIndex++;

    // 슬라이드 인덱스가 슬라이드 개수보다 크면 첫 번째 슬라이드로 돌아갑니다.
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 현재 슬라이드를 화면에 표시합니다.
    slides[slideIndex - 1].style.display = "block";

    // 2초마다 showSlides 함수를 호출하여 자동으로 슬라이드가 변환됩니다.
    setTimeout(showSlides, 2000);
}

// slideIndex 변수를 선언하고 초기값을 0으로 설정합니다. 이 변수는 현재 보여지는 슬라이드의 인덱스를 나타냅니다.

// showSlides 함수를 정의합니다. 이 함수는 슬라이드를 보여주는 기능을 담당합니다.

// i와 slides 변수를 선언합니다. slides 변수에는 mySlides 클래스를 가진 모든 요소들을 배열 형태로 담습니다. getElementsByClassName 메서드를 사용하여 해당 클래스를 가진 요소들을 선택합니다.

// for 루프를 사용하여 모든 슬라이드 요소를 숨김 처리합니다. slides.length는 슬라이드 개수를 나타냅니다. 각 슬라이드 요소의 style.display 속성을 "none"으로 설정하여 해당 슬라이드를 화면에서 보이지 않도록 합니다.

// slideIndex 변수를 증가시킵니다. 다음에 보여질 슬라이드의 인덱스를 업데이트합니다.

// slideIndex가 슬라이드 개수보다 크면, 첫 번째 슬라이드로 돌아가기 위해 slideIndex를 1로 설정합니다.

// 현재 보여지는 슬라이드를 화면에 표시합니다. slides[slideIndex - 1]은 현재 슬라이드를 나타냅니다. style.display 속성을 "block"으로 설정하여 해당 슬라이드를 화면에 보이도록 합니다.

// setTimeout 함수를 사용하여 2초마다 showSlides 함수를 적용한다.

// Swiper Initialization
