    const foodList = [];

    const addBtn = document.querySelector("#add");
    addBtn.addEventListener("click", addList); 
    
    function addList() {
        const food = document.querySelector("#food").value;  // 텍스트 필드의 내용을 food라는 변수로 가져옴
        if (food != null) {
            foodList.push(food);  // foodList 배열에 food 변수 값을 차례대로 추가 
            document.querySelector("#food").value = "";  // 그러고 나면, id="food”인 요소의 값을 지움
            document.querySelector("#food").focus();  // 텍스트 필드에 focus() 메소드 적용
        }
        showList(); // showList 함수 호출
    }    
    
    function showList() { // showList 함수 선언
        let list = "<ul>";  // 목록을 시작하는 <ul> 태그 저장
        for (let i=0; i<foodList.length; i++) {  // 배열 요소마다 반복 
            list += "<li>" + foodList[i] + "<span class='regret' id=" + i + ">x</span></li>";  // 요소와 삭제 버튼을 <li>~</li>로 묶음
        } 
        list += "</ul>";   // 목록을 끝내는 </ul> 태그 추가. 결론적으로는, list = "<li>" + foodList[i] + "<span class='regret' id=" + i +">x</span></li>" + "</ul>" 이렇게 나오게 됨
        document.querySelector('#foodList').innerHTML = list;  // 변수 list의 최종 값 표시

        const remove = document.querySelectorAll(".regret");  // 변수 remove에 'class=regret'을 가진 요소의 배열이 형성됨
        for(let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", removeList); 
        }
    }
    //선택한 항목을 목록에서 삭제하는 함수
    function removeList() {
        const id = this.getAttribute("id"); // id의 속성 i 를 가져옴
        foodList.splice(id, 1); // id부터 1개 삭제
        showList(); //삭제된 거 빼고 목록 새로 만든 후 다시 배열 돌려야 해서 함수 재호출
    
    }