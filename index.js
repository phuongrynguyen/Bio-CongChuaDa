
// By Manh Cuong Dev - Cong Chua Da


// click head phong to fuul width max
const head_click = document.querySelector(".head");

head_click.addEventListener('click', function () {
    document.querySelector(".hea-img").classList.add("bio");

    setTimeout(() => {
        if (document.querySelector(".hea-img").classList.contains('bio')) {
            document.querySelector(".hea-img").classList.remove("bio");
        }
    }, 4000);
});


// click avatar phong to fuul width max
const avatar_click = document.querySelector(".avatar");

avatar_click.addEventListener('click', function () {
    document.querySelector(".avt-img").classList.add("bio");

    setTimeout(() => {
        if (document.querySelector(".avt-img").classList.contains('bio')) {
            document.querySelector(".avt-img").classList.remove("bio");
        }
    }, 4000);
});


// link web neu co !

const LinkWeb = {
    er: [
        {
            lis: "_medium=zalo&utm_campaign=zalo&fbclid=IwAR37D02En3tSs1a5_59vjVT",
            lis_url: "http://",
        },
    ],

    cis: function(){
        const we = this.er.map(et => {
            return `<li><i class="fa-solid fa-globe"></i> ${et.lis}<a
                  href="${et.lis_url}"></a>
              </li>`;
        });

        document.querySelector(".ft_link").innerHTML = we.join('');
    },

    er_star: function(){
        this.cis();
    }
}

LinkWeb.er_star();

// anh

const lie_img = {
    op: [
        {
            im: "avt.png",
        },
       {
            im: "avt.png",
        },
        {
            im: "avt.png",
        },
        {
            im: "avt.png",
        },
        {
            im: "avt.png",
        },
        {
            im: "avt.png",
        },
    ],

    co: function(){
        const wr = this.op.map(iu => {
            return `<img src="${iu.im}" alt="">`;
        });
        document.querySelector(".list_anh").innerHTML = wr.join('');
    },

    sd: function(){
        this.co();
    }
}

lie_img.sd();


// Bai viet

const Tab = {
    tab: [
        {
            avatar: "avt.png",
            names: "Công Chúa Đá",
            tess: '1 gio <i class="fa-solid fa-heart"></i>',
            text: "LƯU Ý QUAN TRỌNG SAU BẢO TRÌ ❗️❗️❗️ - Nhiệm vụ KOL 1 sẽ ngẫu nhiên số lượng quái.…",
            s_img: "avt.png",
            s_img1: "avt.png",
            s_img2: "avt.png",
            s_img3: "avt.png",
            s_img4: "avt.png",
            s_img5: "avt.png",
        },
    ],

    ir: function(){
        const as = this.tab.map(cr => {
            return `
            <div class="tab">
              <div class="hd">
                <div class="ig">
                  <img src="${cr.avatar}" alt="">
                </div>
                <div class="texT">
                  <h5>
                    ${cr.names}
                  </h5>
                  <p>${cr.tess}</p>
                </div>
              </div>
              <!-- text admin -->
              <div class="tab_text">
                <p>${cr.text}</p>
              </div>
              <!-- img admin -->
              <div class="ig_admin">
                <img src="${cr.s_img}" id="a">
                <img src="${cr.s_img1}" id="b">
                <img src="${cr.s_img2}" id="c">
                <img src="${cr.s_img3}" id="d">
                <img src="${cr.s_img4}" id="e">
                <img src="${cr.s_img5}" id="h">
              </div>
              <!-- bf click like tim -->
               <div class="click_like">
                <div class="icon_time" id="icon-time">
                  😍😍
                </div>
                <!-- btn - thich - lien he -->
                 <div class="btn_tnb">
                  <!-- thich -->
                  <div class="thich">
                    <i class="fa-solid fa-thumbs-up"></i> Thích
                  </div>
                  <!-- lien he -->
                   <div class="lienhe">
                    <i class="fa-solid fa-circle-user"></i> Liên hệ
                   </div>
                 </div>
               </div>
            </div>
            `;
        });

        document.querySelector(".rigth").innerHTML = as.join('');
    },

    thich: function(){
        document.querySelector(".thich").addEventListener('click', function(){
            const rt = document.querySelector(".thich");
             document.querySelector(".thich").classList.toggle("e");
        });
    },

    ths: function(){
        const lienhe = document.querySelector(".lienhe");

        lienhe.addEventListener('click', function(){
            window.location.href = "#";
        });
    },

    dj: function(){
        this.ir();
        this.thich();
        this.ths();
    }
}

Tab.dj();