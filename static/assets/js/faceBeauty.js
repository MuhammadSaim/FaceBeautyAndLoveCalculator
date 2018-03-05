$(document).ready(function () {
    $('#imgSend').on('click', function (e) {
        e.preventDefault();
        $('.ImageData').hide();
        var formData = new FormData($('#imageForm')[0]);
        $.ajax({
            url: '/detactFaceBeauty',
            data: formData,
            type: 'POST',
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (data) {
                $('.loader').hide();
                var img = $("#ImageFile").val();
                img = img.split('\\');
                $('.ImageData').show();
                $("#imgFB").attr('src', "./static/assets/images/" + img[2]);
                $(".card-image").html(`<img src="./static/assets/images/${img[2]}" id="imgFB" class="materialboxed"><span class="frame"></span>`);
                var data = data.replace(/\\/g, "");
                data = JSON.parse(data);
                settingFrame(data[0].faceRectangle);
                if (data[0].faceAttributes.gender == 'female') {
                    hasFemale(data[0].faceAttributes);
                } else {
                    hasMale(data[0].faceAttributes);
                }


            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    function hasFemale(data) {
        var total = 0;
        var baldHear = data.hair.bald;
        var smile = data.smile;
        var age = data.age;
        var glasses = data.glasses;
        var eyeMakeup = data.makeup.eyeMakeup;
        var lipMakeup = data.makeup.lipMakeup;
        var happiness = data.emotion.happiness;
        var sadness = data.emotion.sadness;
        var angerness = data.emotion.anger;

        if (baldHear > 0.5) {
            total += -1;
        }
        if (baldHear == 0) {
            total += 2;
        }
        if (baldHear < 0.5) {
            total += -2;
        }

        if (smile < 0.5) {
            total += 1;
        }

        if (smile > 0.5) {
            total += 2;
        }
        if (age < 30) {
            total += -1;
        }
        if (age >= 20 && age <= 30) {
            total += 2;
        }

        if (age < 20) {
            total += 3;
        }

        if (angerness > 0.5) {
            total += -1;
        }

        if (angerness < 0.5) {
            total += 1;
        }

        if (sadness > 0.5) {
            total += -1;
        }

        if (sadness < 0.5) {
            total += 1;
        }

        if (happiness > 0.5) {
            total += 2;
        }

        if (happiness < 0.5) {
            total += 1;
        }

        if (lipMakeup) {
            total += 1;
        }

        if (eyeMakeup) {
            total += 1;
        }

        if (glasses == 'ReadingGlasses') {
            total += 2;
        }

        if (glasses == 'Sunglasses') {
            total += 4;
        }

        if (total < 3) {
            total = 3;
        }

        if (total == 10 || total > 10) {
            total = 9.7
        }

        //total = Math.floor(Math.random()*(total-1+1)+1);

        var numAnim = new CountUp("beautyPercentage", 0, total*10, 0, 5, {
            'suffix': '%'
        });
        if (!numAnim.error) {
            numAnim.start();
        } else {
            console.error(numAnim.error);
        }


    }

    function hasMale(data) {
        var total = 0;
        var baldHear = data.hair.bald;
        var smile = data.smile;
        var age = data.age;
        var glasses = data.glasses;
        var moustache = data.facialHair.moustache;
        var beard = data.facialHair.beard;
        var happiness = data.emotion.happiness;
        var sadness = data.emotion.sadness;
        var angerness = data.emotion.anger;

        if(moustache < 0.5){
            total += 1;
        }

        if(beard < 0.5){
            total += 1;
        }

        if(moustache > 0.5 && beard > 0.5){
            total += 3;
        }

        if (baldHear > 0.5) {
            total += -1;
        }
        if (baldHear == 0) {
            total += 2;
        }
        if (baldHear < 0.5) {
            total += -2;
        }

        if (smile < 0.5) {
            total += 1;
        }

        if (smile > 0.5) {
            total += 2;
        }
        if (age < 30) {
            total += -1;
        }
        if (age >= 20 && age <= 30) {
            total += 2;
        }

        if (age < 20) {
            total += 3;
        }

        if (angerness > 0.5) {
            total += -1;
        }

        if (angerness < 0.5) {
            total += 1;
        }

        if (sadness > 0.5) {
            total += -1;
        }

        if (sadness < 0.5) {
            total += 1;
        }

        if (happiness > 0.5) {
            total += 2;
        }

        if (happiness < 0.5) {
            total += 1;
        }

        if (glasses == 'ReadingGlasses') {
            total += 2;
        }

        if (glasses == 'Sunglasses') {
            total += 4;
        }

        if (total < 3) {
            total = 3;
        }

        if (total == 10 || total > 10) {
            total = 9.7
        }

        //total = Math.floor(Math.random()*(total-1+1)+1);

        var numAnim = new CountUp("beautyPercentage", 0, total*10, 0, 5, {
            'suffix': '%'
        });
        if (!numAnim.error) {
            numAnim.start();
        } else {
            console.error(numAnim.error);
        }
    }


    //calculation frame width, height, and position
    function settingFrame(faceRectangle) {
        console.log(faceRectangle.top);
        $('.frame').css({
            'display': 'block',
            'top': (faceRectangle.top * 1.15) + 'px',
            'left': (faceRectangle.left * 1.15) + 'px',
            'width': (faceRectangle.width * 1.75) + 'px',
            'height': (faceRectangle.height * 1.75) + 'px'
        });

    }
});