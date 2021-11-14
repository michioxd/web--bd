$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'data.json',
        cache: false,
        beforeSend: function() {
            $('.loader').show();
        },
        success: function(data) {
            $('.loader').hide();
            var outputJSON = JSON.stringify(data);
            var dataa = JSON.parse(outputJSON);
            var list;
            for (var i = 0;
                (i < data.length); i++) {
                var item = dataa[i],
                    ipfs = "",
                    drive = "";
                if (item['ipfsUrl'] !== "") {
                    ipfs = `<button onclick="window.open('` + item['ipfsUrl'] + `')" class="mdui-btn mdui-ripple">IPFS</button> `
                }
                if (item['driveUrl'] !== "") {
                    drive = ` <button onclick="window.open('` + item['driveUrl'] + `')" class="mdui-btn mdui-ripple">DRIVE</button>`
                }
                output = `
            <div class="mdui-col-xs-6 mdui-col-sm-3" >
            
            <div class="mdui-card itemss">
                    <div class="mdui-card-media">
                        <div class="art">
                            <div class="inner" style="background-image: url(` + item['art'] + `);"></div>
                        </div>
                    </div>
                    <div class="mdui-card-primary">
                        <div class="mdui-card-primary-title">` + item['title'] + `</div>
                        <div class="mdui-card-primary-subtitle">` + item['type'] + `</div>
                    </div>
                    <div class="mdui-card-actions">
                        ` + ipfs + drive + `
                    </div>
                </div>
                </div>
            `;
                $("#APP_OUTPUT").append(output);
            }
        },
        error: function(xhr, status, error) {
            $('.loader').hide();
            mdui.snackbar({
                message: 'Cannot get Data!'
            });
        }
    });
});