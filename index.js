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


//MẢNG CÁC SỐ 

 var arrNumber = [];
 var arrSoDuong = [];
 
 var soNguyen = +document.getElementById ('nhap-so').value;


document.getElementById('btnThemSoNguyen').onclick = function (){


    var soNguyen = +document.getElementById ('nhap-so').value;
    arrNumber.push(soNguyen);

document.getElementById('arrNumber').innerHTML = arrNumber ;

}




//TỔNG CÁC SỐ

document.getElementById('btnTinhTong').onclick = function () {

var tongCacSo = 0 
for (var index = 0 ; index <= arrNumber.length; index++) {
    if (arrNumber[index] > 0 ) {
        tongCacSo += arrNumber[index] ;
    }

}

document.getElementById ('ket-qua-1').innerHTML = tongCacSo;


}



//ĐẾM SỐ DƯƠNG
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



//TÌM SỐ NHỎ NHÁT
document.getElementById ('btnTimSoNhoNhat').onclick = function () {
    var min  =  arrNumber[0];
    for ( var index = 0 ; index <= arrNumber.length; index++) {
        if(arrNumber[index] < min) {
            min = arrNumber[index];
        }
    }
    document.getElementById('ket-qua-3').innerHTML  =  min;
}

 


//TÌM SỐ DƯƠNG NHỎ NHẤT
document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
  
    


    for (var index = 0; index < arrNumber.length; index++) {
        var min = arrSoDuong[0];
        if (arrNumber[index] > 0) {
            arrSoDuong.push(arrNumber[index]);
        }


        for (var i = 0; i < arrSoDuong.length; i++) {
            if (arrSoDuong[i] < min) {
                min = arrSoDuong[i];
            }
        }

    }



    document.getElementById('ket-qua-4').innerHTML = min;

}


// TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG

document.getElementById('btnTimSoChanCuoiCung').onclick = function () {

  
    var soChanCuoi = 0;

    
    for (var index = arrNumber.length -1 ; index >= 0 ; index--) {

        if ( arrNumber [index] % 2 === 0) {
          soChanCuoi = arrNumber[index];
          break;
        }
       
    }
    document.getElementById('ket-qua-5').innerHTML = soChanCuoi;


}

//ĐỔI CHỖ
document.getElementById('btnDoiCho').onclick = function () {
    //input

    var viTriSo1 = +document.getElementById('vi-tri-1').value;
    var viTriSo2 = +document.getElementById('vi-tri-2').value;
    var giaTri1 = 0;
    
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
    }
    document.getElementById('ket-qua-6').innerHTML = arrNumber;
}


//SẮP XẾP THEO THỨ TỰ TĂNG DẦN
document.getElementById('btnSapXep').onclick = function () {
   var arrSort = _.sortBy(arrNumber);

document.getElementById('ket-qua-7').innerHTML = `Mảng sau khi sắp xếp: ${arrSort}` ;

}


//TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG
document.getElementById('btnTimSoNguyenToDauTien').onclick =  function () {
    var soNguyenTo = 0 ;
    var laSoNguyenTo = true;
    for (var i = 0; i < arrNumber.length; i++) {
      
      for (var j = 2; j < arrNumber[i]; j++) {
       
          if (arrNumber[i] % j === 0) {
          laSoNguyenTo = false;
         
        }
      }
      if (laSoNguyenTo && arrNumber[i] > 1) {
        soNguyenTo = arrNumber[i];
        break;
        
      }
    }
    document.getElementById('ket-qua-8').innerHTML  = soNguyenTo;
  }




//ĐẾM SỐ NGUYÊN
var arrSoNguyen = [];
document.getElementById('btnThemSoRandom').onclick = function () {
    var soRanDom = +document.getElementById('nhap-so-random').value;
   
    arrSoNguyen.push(soRanDom);

    document.getElementById('divChuaSoNguyen').innerHTML = arrSoNguyen;
}


document.getElementById('btnDemSoNguyen').onclick = function () {
    var htmlString = ''
    var soNguyen = 0;
    for(var index= 0 ;index < arrSoNguyen.length;index++) {

        if (Number.isInteger(arrSoNguyen[index])) {
            soNguyen ++;
           
        }
        
    }
    document.getElementById('ket-qua-9').innerHTML = htmlString = `Sô nguyên: ${soNguyen}`
    
}
//SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ SỐ DƯƠNG



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


