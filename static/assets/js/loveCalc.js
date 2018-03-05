$(document).ready(function () {
    $("#calcLove").on('click', function (e) {
        e.preventDefault();
        // var loveData = $("#loveForm").serialize();
        var formData = new FormData($('#loveForm')[0]);
        $.ajax({
            url: '/findLove',
            type: 'POST',
            data:formData,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (data) {
                data = JSON.parse(data);
                $('.loader').hide();
                var numAnim = new CountUp("loveValue", 0, data.love * 10, 0, 5, {
                    'suffix': '%'
                });
                if (!numAnim.error) {
                    numAnim.start();
                } else {
                    console.error(numAnim.error);
                }
            },
            error: function (data) {
                console.log(data)
            }
        });
    });
});