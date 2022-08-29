//Bai 1
    document.getElementById("btn-sap-xep").addEventListener("click", function () {
        
        var numb1 = document.getElementById("txt-so-1").value * 1;
        
        var numb2 = document.getElementById("txt-so-2").value * 1;

        var numb3 = document.getElementById("txt-so-3").value * 1;

        if (numb1 < numb2 && numb2 < numb3) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb1} < ${numb2} < ${numb3}</div>`
        } else if (numb1 < numb3 && numb3 < numb2) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb1} < ${numb3} < ${numb2}</div>`
        } 
        else if (numb2 < numb3 && numb3 < numb1) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb2} < ${numb3} < ${numb1}</div>`
        } else if (numb2 < numb1 && numb1 < numb3) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb2} < ${numb1} < ${numb3}</div>`
        } else if (numb3 < numb2 && numb2 < numb1) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb3} < ${numb2} < ${numb1}</div>`
        } else if (numb3 < numb1 && numb1 < numb2) {
            document.getElementById("sap-xep").innerHTML = `<div>${numb3} < ${numb1} < ${numb2}</div>`
        } else {
            document.getElementById("sap-xep").innerHTML = `<div>HÃY NHẬP 3 SỐ KHÁC NHAU</div>`
        }})

//Bai 2
    document.getElementById("btn-chao").addEventListener("click", function() {

        var user = document.getElementById("nguoi-dung").value;

        if (user == "txt-bo") {
            document.getElementById("chao").innerHTML = `<div>Xin chào Bố!</div>`
        } else if (user == "txt-me") {
            document.getElementById("chao").innerHTML = `<div>Xin chào Mẹ!</div>`
        } else if (user == "txt-con-trai") {
            document.getElementById("chao").innerHTML = `<div>Xin chào Con Trai!</div>`
        } else {
            document.getElementById("chao").innerHTML = `<div>Xin chào Con Gái!</div>`
        }

     })

//Bai 3
    document.getElementById("btn-dem-so").addEventListener("click", function() {
        
        var firstNumb = document.getElementById("txt-first-numb").value * 1;
        var secondNumb = document.getElementById("txt-second-numb").value * 1;
        var thirdNumb = document.getElementById("txt-third-numb").value * 1;
         
        var countEven = 0;
        var countOdd = 0;

        if (firstNumb % 2 == 0) {
            countEven++
        } else {
            countOdd++
        };

        if (secondNumb % 2 == 0) {
            countEven++
        } else {
            countOdd++
        };

        if (thirdNumb % 2 == 0) {
            countEven++
        } else {
            countOdd++
        };

        document.getElementById("dem-so").innerHTML = `<div>Có ${countEven} số chẵn, ${countOdd} số lẻ</div>`
     })

//Bai 4
    document.getElementById("btn-ket-qua").addEventListener("click", function() {

        var edge1 = document.getElementById("txt-do-dai-1").value * 1;
        var edge2 = document.getElementById("txt-do-dai-2").value * 1;
        var edge3 = document.getElementById("txt-do-dai-3").value * 1;

        var result = "";

        if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
            result = "Hình tam giác cân"
        }

        if (edge1 == edge2 && edge1 == edge3 && edge2 == edge3) {
            result = "Hình tam giác đều"
        }

        if (edge1*edge1 == edge2*edge2 + edge3*edge3 ||
            edge2*edge2 == edge1*edge1 + edge3*edge3 ||
            edge3*edge3 == edge2*edge2 + edge1*edge1) {
            result = "Hình tam giác vuông"
            }

            document.getElementById("ket-qua").innerHTML = `<div>${result}</div>`
    })