const submitButton = document.getElementById('submit-button'); //inisialisasi button submit "HITUNG BMI"


submitButton.addEventListener("click", (event) => { 
//menggunakan fungsi event listener dengan action click button submit untuk menjalankan fungsi dibawah

event.preventDefault();
//prevent default supaya page tidak refresh setelah tekan tombol submit

    let ageInput = document.querySelector('#age-input').value;
    let heightInput = document.querySelector('#height-input').value;
    let weightInput = document.querySelector('#weight-input').value;
    let maleRadio = document.getElementById('male');
    let femaleRadio = document.getElementById('female');
    //inisialisasi variabel yg diperlukan untuk perhitungan

    //dibawah formula untuk validasi input
    if (ageInput == NaN || ageInput == 0 || ageInput == ''){
        alert('input your age!');
    }else if (ageInput < 17){
        alert('Underage people is not recommended to use this calculator! Please put age between 17 to 100.');
    }else if (heightInput == 0 || heightInput == NaN || heightInput == ''){
        alert('Insert your height!');
    }else if(weightInput == 0 || weightInput == NaN || weightInput == ''){
        alert('Insert your weight!');
    }else if(ageInput >= 17){
    
    // dibawah formula untuk hitung BMI
    heightInput = heightInput / 100;

    let BMI = weightInput / (heightInput * heightInput);

    BMI = BMI.toFixed(2);

    // untuk menunjukkan hasil BMI 
    document.querySelector('#bmi-result').innerHTML = `${BMI}`;

    document.querySelector('#indicator').style.display = "block";
    document.querySelector('#container-penjelasan').style.display = "block";
    // di atas untuk mengubah style indikator gambar dari display: none; ke display: block;

    // dibawah adalah formula untuk menunjukkan indikator tergantung dari hasil BMI
    if (BMI <= 18.5){
        document.querySelector('#penjelasan-hasil').innerHTML = `Kekurangan berat badan`;
        document.querySelector('#penjelasan-hasil-2').innerHTML = `Kami rekomendasikan untuk mencoba pola makan tiga kali sehari dan menambahkan porsi makan secukupnya`
        // di atas adalah message untuk menjelaskan kondisi kesehatan

        document.querySelector('#bmi-result').style.color = "#ff6700";
        document.querySelector('#penjelasan-hasil').style.color = "#ff6700";

        // dibawah untuk menunjukkan gambar indikasi berat badan
        if (maleRadio.checked){
            document.querySelector('#indicator').src = 'icon/underweight man.png';
        }else if (femaleRadio.checked){
            document.querySelector('#indicator').src = 'icon/underweight woman.png';
        }
    }else if(BMI > 18.5 && BMI <= 24.9){
        document.querySelector('#penjelasan-hasil').innerHTML = `Berat badan yang ideal`;
        document.querySelector('#penjelasan-hasil-2').innerHTML = `Kami rekomendasikan untuk menetapkan pola makan yang sehat dan olah raga yang cukup`

        document.querySelector('#bmi-result').style.color = "#80b918";
        document.querySelector('#penjelasan-hasil').style.color = "#80b918";

        if (maleRadio.checked){
            document.querySelector('#indicator').src = 'icon/normal man.png';
        }else if (femaleRadio.checked){
            document.querySelector('#indicator').src = 'icon/normal woman.png';
        }
    }else if (BMI >= 25.0 && BMI <= 29.9){
        document.querySelector('#penjelasan-hasil').innerHTML = `Berat badan yang kurang ideal`;
        document.querySelector('#penjelasan-hasil-2').innerHTML = `Kami rekomendasikan untuk menetapkan pola makan yang sudah dijalankan tetapi mengurangi porsi makan dengan secukupnya dan olah raga yang cukup`

        document.querySelector('#bmi-result').style.color = "#ff6700";
        document.querySelector('#penjelasan-hasil').style.color = "#ff6700";

        if (maleRadio.checked){
            document.querySelector('#indicator').src = 'icon/overweight man.png';
        }else if (femaleRadio.checked){
            document.querySelector('#indicator').src = 'icon/overweight woman.png';
        }
    }else if (BMI >= 30.0){
        document.querySelector('#penjelasan-hasil').innerHTML = `Berat badan yang berlebihan`;
        document.querySelector('#penjelasan-hasil-2').innerHTML = `Kami rekomendasikan untuk menormalkan pola makan tiga kali sehari dan mengurangi porsi makan yang belebihan dan juga memulai olah raga yang teratur sesuai dengan instruksi dokter`

        document.querySelector('#bmi-result').style.color = "#F32013";
        document.querySelector('#penjelasan-hasil').style.color = "#F32013";

        if (maleRadio.checked){
            document.querySelector('#indicator').src = 'icon/obese man.png';
        }else if (femaleRadio.checked){
            document.querySelector('#indicator').src = 'icon/obese woman.png';
        }
    }

    }

    
    
});