//tabs
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();




 var arrNumber = [];
 var arrSoDuong = [];
 
 var soNguyen = +document.getElementById ('nhap-so').value;


document.getElementById('btnThemSoNguyen').onclick = function (){


    var soNguyen = +document.getElementById ('nhap-so').value;
    arrNumber.push(soNguyen);

document.getElementById('arrNumber').innerHTML = arrNumber ;

}




//tong cac so 

document.getElementById('btnTinhTong').onclick = function () {

var tongCacSo = 0 
for (var index = 0 ; index <= arrNumber.length; index++) {
    if (arrNumber[index] > 0 ) {
        tongCacSo += arrNumber[index] ;
    }

}

document.getElementById ('ket-qua-1').innerHTML = tongCacSo;


}



//dem so  duong

document.getElementById('btnDemSoDuong').onclick = function () {
    var soNguyen = +document.getElementById ('nhap-so').value;
    var demSo = 0 ;
    viTriSoDuong = 0;


    
    for (var index = 0 ; index <= arrNumber.length; index ++ ){
        if ( arrNumber[index] > 0 ) {
            viTriSoDuong = index;
            demSo ++
        }
       
    }

    document.getElementById('ket-qua-2').innerHTML = demSo;
}



//tim so  nho nhat

document.getElementById ('btnTimSoNhoNhat').onclick = function () {
    var min  =  arrNumber[0];
    for ( var index = 0 ; index <= arrNumber.length; index++) {
        if(arrNumber[index] < min) {
            min = arrNumber[index];
        }

    }

    document.getElementById('ket-qua-3').innerHTML  =  min;
}


//tim so duong nho nhat   



document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
  
    


    for (var index = 0; index < arrNumber.length; index++) {
        var min = arrSoDuong[0];
        if (arrNumber[index] > 0) {

            arrSoDuong[index] = arrNumber[index];
        }


        for (var i = 0; i < arrSoDuong.length; i++) {
            if (arrSoDuong[i] < min) {
                min = arrSoDuong[i];
            }
        }

    }



    document.getElementById('ket-qua-4').innerHTML = min;

}


// tìm số chẵn cuối cùng trong mảng

document.getElementById('btnTimSoChanCuoiCung').onclick = function () {

  
    var soChanCuoi = 0;

    
    for (var index = arrNumber.length -1 ; index >= 0 ; index--) {

        if ( arrNumber [index] % 2 === 0) {


          soChanCuoi = arrNumber[index];

          break;
            
            

        }

        // soChanCuoi = soChan;

        

    }


    document.getElementById('ket-qua-5').innerHTML = soChanCuoi;


}

//ĐỔI CHỖ
document.getElementById('btnDoiCho').onclick = function () {
    //input

    var viTriSo1 = +document.getElementById('vi-tri-1').value;
    var viTriSo2 = +document.getElementById('vi-tri-2').value;

    var giaTri1 = 0;
    var giaTri2 = 0;


    //output 

    //process
    for (var index = 0; index < arrNumber.length; index++) {



        if (viTriSo1 == index) {

            var giaTri3 = arrNumber[viTriSo1];
            giaTri1 = arrNumber[index];

            arrNumber[viTriSo1] = arrNumber[viTriSo2];

        }

        if (viTriSo2 == index) {

            arrNumber[viTriSo2] = giaTri3;

        }



        document.getElementById('ket-qua-6').innerHTML = arrNumber;

    }
}


//sắp xếp mảng theo thứ tự tăng dần  //đang  cấn
document.getElementById('btnSapXep').onclick = function () {
   for (var i  = 0 ;i < arrNumber.length; i++) {
     for (var j = 0; j -i - 1; j++) {
        if (arrNumber[j] > arrNumber[j + 1]) {
            var temp  = arrNumber[j];
            arrNumber[j]  = arrNumber [j+ 1];
            arrNumber[j + 1] = temp ;
     }
   }

}

document.getElementById('ket-qua-7').innerHTML = arrNumber;

}


//tìm số nguyên tố đầu tiên trong mảng
document.getElementById('btnTimSoNguyenToDauTien').onclick =  function () {
    var soNguyenTo = 0 ;
    
   
    for (let i = 0; i < arrNumber.length; i++) {
      let isPrime = true;
     
      for (let j = 2; j < arrNumber[i]; j++) {
        if (arrNumber[i] % j === 0) {
          isPrime = false;
          break;
          
        }
      }
      if (isPrime && arrNumber[i] > 1) {
        soNguyenTo = arrNumber[i];
        
        break;
        
      }
    }
    document.getElementById('ket-qua-8').innerHTML  = soNguyenTo;
  }


//Đếm số nguyên

document.getElementById('btnThemSoRandom').onclick = function () {
    var soRanDom = +document.getElementById('nhap-so-random').value;
   
    arrNumber.push(soRanDom);

    document.getElementById('arrNumber').innerHTML = arrNumber;
}


document.getElementById('btnDemSoNguyen').onclick = function () {

    var soNguyen = 0;
    

    for(var index= 0 ;index < arrNumber.length;index++) {

        if (Number.isInteger(arrNumber[index])) {
            soNguyen ++;
           
        }
        
    }
    document.getElementById('ket-qua-9').innerHTML = soNguyen;
    


}
//so sánh số lượng số âm và số dương



document.getElementById('btnSoSanh2So').onclick = function () {
    var soAm = 0 ;
    var soDuong = 0;
    var htmlString = '';

    for (var index = 0 ; index < arrNumber.length;index++) {
        if (arrNumber[index]> 0 ) {
            soDuong++;
        }else if (arrNumber[index] < 0) {
            soAm++;
        }

        if(soDuong === soAm) {
            htmlString = 'Số dương bằng số âm';
        }else if (soDuong < soAm) {
            htmlString = "Số dương ít hơn số âm";
        }else if (soDuong > soAm) {
            htmlString = 'Số dương nhiều hơn số âm';
        }
    }


   document.getElementById('ket-qua-10').innerHTML = htmlString; 

  }


