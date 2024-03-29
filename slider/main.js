
(function() {
    
    var filename = 'https://tympanus.net/codrops/adpacks/demoad.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1', 'ad2'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B29258209.358661418;dc_trk_aid=549462698;dc_trk_cid=186410004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
            var cdaImgAlt = 'Mailchimp';
            var cdaText = "Sign up for Mailchimp today.";
            break;
        case "ad2":
            var cdaLink = 'https://readymag.com/?utm_source=tympanus.net&utm_medium=partnership_banner&utm_campaign=main&utm_content=demo_main';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/07/codrops_20Demo.jpg';
            var cdaImgAlt = 'Readymag';
            var cdaText = "Create outstanding websites without codingâ€”get started with Readymag for free";
            break;
        case "ad3":
            var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N718679.452584BUYSELLADS.COM/B26953268.342937760;dc_trk_aid=534766646;dc_trk_cid=175795063;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2022/08/SS.jpg';
            var cdaImgAlt = 'Squarespace';
            var cdaText = "Whatever your idea, you can sell it on Squarespace.";
            break;
        default:
            var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi';
            var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.style.display = 'none';
    cda.innerHTML = '<a href="'+cdaLink+'" class="carbon-img" target="_blank" rel="noopener"><img src="'+cdaImg+'" alt="'+cdaImgAlt+'" border="0" height="100" width="130"></a><a href="'+cdaLink+'" class="carbon-text" target="_blank" rel="noopener">'+cdaText+'</a><div class="cda-footer"><a class="carbon-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><span class="cda-remove" id="cda-remove">Close</span></div>';
    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {
        cda.style.display = 'block';
    }, 1000);

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
    });
    
})();