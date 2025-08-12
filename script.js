

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center:  { lat: 14.5615, lng: 120.5954 },
    zoom: 10,
  });

 
 const limay =  new google.maps.Marker({
   position: { lat:  14.550084429295419, lng: 120.5975915404342 },
   map:map,
   label:"Limay Branch",
   title:"Lapify Limay",
   draggable: false,
   animation: google.maps.Animation.BOUNCE,
  })


  const samal =  new google.maps.Marker({

   position: { lat: 14.758579589755396, lng: 120.5314683861307 },
   map:map,
   label:"Samal Branch",
   title:"Lapify Samal",
   draggable: false,
   animation: google.maps.Animation.BOUNCE,
  })

  
  const balanga =  new google.maps.Marker({
   position: { lat: 14.676720416832184, lng: 120.53452837940716},
   map:map,
   label:"Balanga Branch",
   title:"Lapify Balanga",
   draggable: false,
   animation: google.maps.Animation.BOUNCE,
  })

}

initMap();
















let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header nav a');


  window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop-150;
      let height = sec.offsetHeight+100;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
         });

      };

   });
  };

  
  
  //Features for FIRST HOME PAGE

  const header = document.querySelector('.firstpage');
  let firstpage = document.getElementById('firstpage');
  let margin = document.getElementById('firstpage');
  let laptopinf = document.getElementById('laptopinf');
  let gamecontain = document.getElementById('xboxlogos');
  let para = document.getElementById('para');
  let nebulacontainer = document.getElementById('nebulacontainer');
  
  
  document.addEventListener('scroll', function(){

  });
  
  


  
  
  //Features Page Scroll Parallax
  window.addEventListener('scroll', function(){
      let value = window.scrollY;
      firstpage.style.marginTop = value * 0.5 +'px';


      const marginTopNumber = parseInt(value, 10)
      console.log(marginTopNumber)

      
     if(marginTopNumber <= 100){
        document.getElementById('laptophover').style.backgroundImage="url('images/rogstrixg16.png')";

     }
     else if(marginTopNumber <= 200 ){
        document.getElementById('laptophover').style.backgroundImage="url('images/rogtilt.png')";

     }
     else if(marginTopNumber <= 300){
        document.getElementById('laptophover').style.backgroundImage="url('images/rogfold.png')";
        laptopinf.style.marginRight = "200px";
     }
     else if(marginTopNumber <= 400){
        firstpage.style.marginTop = "0px";
        laptopinf.style.marginRight = "180px";
     }
     else if(marginTopNumber <= 500){

        laptopinf.style.marginRight = "120px";
     }
     else if(marginTopNumber <= 600){

        laptopinf.style.marginRight = "100px";
     }
     else if(marginTopNumber <= 700){

        laptopinf.style.marginRight = "0px";
        gamecontain.style.marginTop = "700px"
     }


     else if(marginTopNumber <= 1100){
        gamecontain.style.opacity = "0"; 
        gamecontain.style.marginTop = "600px"
     }
     
     else if(marginTopNumber <= 1200){

        gamecontain.style.marginTop = "500px"
     }
     
     else if(marginTopNumber <= 1300){
   
        gamecontain.style.marginTop = "300px"
     }
     
     else if(marginTopNumber <= 1400){
      document.getElementById("gamepasscontain").style.opacity = "0"; 
      gamecontain.style.opacity= "0"; 
        gamecontain.style.marginTop = "150px"
     }

     else if(marginTopNumber <= 1500){
      document.getElementById("gamepasscontain").style.opacity = "0.5"; 
      gamecontain.style.opacity= "0.5"; 
      gamecontain.style.marginTop = "100px"
   }

     else if(marginTopNumber <= 1800){
      document.getElementById("gamepasscontain").style.opacity = "1"; 
       gamecontain.style.opacity= "1"; 
        gamecontain.style.marginTop = "80px"
     }





   else if(marginTopNumber <= 2250){

      document.getElementById("intel").style.opacity = "0"; 
      document.getElementById("intel").style.marginLeft= "75px"; 

   }

   else if(marginTopNumber <= 2283){

      document.getElementById("intel").style.opacity = "0.5";
      document.getElementById("intel").style.marginLeft= "50px"; 
   }

   else if(marginTopNumber <= 2360){

      document.getElementById("intel").style.opacity = "1";
      document.getElementById("intel").style.marginLeft = "0px"; 
   }



   else if(marginTopNumber <= 2900){

      document.getElementById("nvi").style.opacity = "0";
      document.getElementById("nvi").style.marginRight = "60px"; 
   }

   else if(marginTopNumber <= 3000){

      document.getElementById("nvi").style.opacity = "0.5";
      document.getElementById("nvi").style.marginRight  = "50px"; 
   }

   else if(marginTopNumber <= 3100){

      document.getElementById("nvi").style.opacity = "1";
      document.getElementById("nvi").style.marginRight = "0px"; 
   }









     





     else if(marginTopNumber <= 4035){

      para.style.width ="2060px"
      para.style.height="1493px"
      para.style.marginTop="-40px"
     para.style.marginLeft="-291px"
   }
   else if(marginTopNumber <= 4197){

      para.style.width ="1924px"
      para.style.height="1394px"
      para.style.marginTop="142px"
      para.style.marginLeft="-254px"
   }
   else if(marginTopNumber <= 4359){
      para.style.width ="1788px"
      para.style.height="1295px"
      para.style.marginTop="324px"
      para.style.marginLeft="-217px"

   }
   else if(marginTopNumber <= 4521){
      para.style.width ="1652px"
      para.style.height="1196px"
      para.style.marginTop="506px"
      para.style.marginLeft="-180px"


   }
   else if(marginTopNumber <= 4683){
      para.style.width ="1516px"
      para.style.height="1097px"
      para.style.marginTop="688px"
      para.style.marginLeft="-143px"

   }
   else if(marginTopNumber <= 4845){


      para.style.width ="1380px"
      para.style.height="998px"
      para.style.marginTop="870px"
      para.style.marginLeft="-106px"
   }

   else if(marginTopNumber <= 5007){

      para.style.width ="1244px"
      para.style.height="899px"
      para.style.marginTop="1052px"
      para.style.marginLeft="-69px"
   }

   else if(marginTopNumber <= 5169){

      para.style.width ="1108px"
      para.style.height="800px"
      para.style.marginTop="1234px"
      para.style.marginLeft="-32px"
   }


   else if(marginTopNumber <= 5331){

      para.style.width ="972px"
      para.style.height="701px"
      para.style.marginTop="1416px"
      para.style.marginLeft="5px"
      document.getElementById("nebulacontainer").style.opacity = "0";
      document.getElementById("nebulacontainer").style.left = "650px";
   }


   else if(marginTopNumber <= 5493){

      para.style.width ="836px"
      para.style.height="602px"
      para.style.marginTop="1598px"
      para.style.marginLeft="42px"
      document.getElementById("nebulacontainer").style.opacity = "1";
      document.getElementById("nebulacontainer").style.left = "850px";
   }







   else if(marginTopNumber <= 5655){

      para.style.width ="700px"
      para.style.height="507px"
      para.style.marginTop="1780px"
      para.style.marginLeft="80px"

     
   }



   else if(marginTopNumber <= 11872){
      document.getElementById("mizu").style.marginRight = "400px";
      document.getElementById("mizu").style.opacity= "0.1";
      document.getElementById("aljhon").style.opacity= "0.1";

     
   }


   else if(marginTopNumber <= 12872){
      document.getElementById("mizu").style.marginRight = "30px";
      document.getElementById("mizu").style.opacity= "1";
      document.getElementById("aljhon").style.opacity= "1";
     
   }


   
  });










//LAPTOP BANNERS//LAPTOP BANNERS//LAPTOP BANNERS//LAPTOP BANNERS//LAPTOP BANNERS


const carouselSlide = document.querySelector('.laptopslide');
const carouselImages = document.querySelectorAll('.laptopslide img');


//Banner Next Button
const nextBtn = document.querySelector('#nextbannerbutton');
const prevBtn = document.querySelector('#prevbannerbutton');

//Counter
let counter = 1;
const size  = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



//Banner next button listener
nextBtn.addEventListener('click',()=>{

    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);

});

//Banner next button listener
prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);

});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id == 'lastclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        

    }

    if(carouselImages[counter].id == 'firstclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }



    if(carouselImages[counter].id == 'tuf'){
        console.log('TUF');    
        document.getElementById("roginfolog").style.backgroundImage="url('images/tuflogo.png')";
        document.getElementById("roglaptopname").innerHTML="ASUS TUF A16";
        document.getElementById("roglaptopname").style.fontFamily='Tuf';
        document.getElementById("roglaptopslogan").innerHTML="EXPANSIVE IMMERSION. MECHANIZED PERFORMANCE.";
        document.getElementById("roglaptopslogan").style.color= "rgb(246, 238, 0)";
        document.getElementById("roglaptopdescription").innerHTML="The 2024 TUF Gaming A16 retains its classic TUF styling, with a few new touches. The Mecha Grey variant sports an embossed TUF logo, while the Jaeger Gray editions have a stylish laser engraved logo.  Dive right into gaming and creating on Windows 11 with the AMD Ryzen™ 9 7845HX and up to an NVIDIA® GeForce RTX™ 4070 Laptop GPU with support for NVIDIA® Advanced Optimus. The 2024 TUF Gaming A16 also sports high-speed DDR5-5200MHz RAM and dual PCIe Gen 4x4 M.2 SSD slots, with all slots easily accessible for future upgrades and expansion.";
        document.getElementById("cpuname").innerHTML="AMD Ryzen™";
        document.getElementById("cpugen").innerHTML="R9-7845HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4070";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="165Hz FHD";
        document.getElementById("cpulogo").src="amdlogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="displaylogo.png";
        document.getElementById("cpuname").style.color="rgb(255, 174, 0)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
    if(carouselImages[counter].id == 'rog'){
        console.log('ROG');    
        document.getElementById("roginfolog").style.backgroundImage="url('images/roglogo.png')";
        document.getElementById("roglaptopname").innerHTML="ROG STRIX G18";
        document.getElementById("roglaptopname").style.fontFamily='Rog';
        document.getElementById("roglaptopslogan").innerHTML="RAISE YOUR GAME. CARRY YOUR SQUAD.";
        document.getElementById("roglaptopslogan").style.color= "rgb(255, 69, 69)";
        document.getElementById("roglaptopdescription").innerHTML="Draw more frames and win more games with the brand new Strix G18 and Windows 11 Pro. Powered by up to a 13th Gen Intel® Core™ i9-13980HX Processor and up to an NVIDIA GeForce RTX 4080 Laptop GPU boasting a max TGP of 175W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus support, the Strix G18 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 32GB of 4800MHz DDR5 RAM, large game libraries and intense multitasking sessions are a breeze for this gaming machine.";
        document.getElementById("cpuname").innerHTML="Intel®Core™";
        document.getElementById("cpugen").innerHTML="i9-13980HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4080";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="240Hz WQXGA";
        document.getElementById("cpulogo").src="intellogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="bigdisplaylogo.png";
        document.getElementById("cpuname").style.color="rgb(0, 191, 255)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
    if(carouselImages[counter].id == 'msi'){
        console.log('MSI');    
        document.getElementById("roginfolog").style.backgroundImage="url('images/msilogo.png')";
        document.getElementById("roglaptopname").innerHTML="MSI RAIDER GE76";
        document.getElementById("roglaptopname").style.fontFamily='Msi';
        document.getElementById("roglaptopslogan").innerHTML="OVERBOOST TECHNOLOGY UNLEASH THE POWER";
        document.getElementById("roglaptopslogan").style.color= "rgb(255, 69, 69)";
        document.getElementById("roglaptopdescription").innerHTML="The Raider series is the pinnacle of performance with features to lead you beyond infinity. With the latest 14th Gen. Intel® Core™ i9-14900HX, the Raider GE76 provides unprecedented boost in your multitasking projects and performance demanding games. NVIDIA® GeForce RTX™ 40 Series Laptop GPUs power the world's fastest laptops for gamers and creators. They're built with Ampere—NVIDIA's 2nd gen RTX architecture—to give you the most realistic ray-traced graphics and cutting-edge AI features like NVIDIA DLSS. Plus, Max-Q Technologies unleash the power of AI to make thin, high-performance laptops that are faster and better than ever.";
        document.getElementById("cpuname").innerHTML="Intel®Core™";
        document.getElementById("cpugen").innerHTML="i9-14900HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4090";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="300Hz FHD";
        document.getElementById("cpulogo").src="intellogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="mediumdisplaylogo.png";
        document.getElementById("cpuname").style.color="rgb(0, 191, 255)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
    if(carouselImages[counter].id == 'legion'){
        console.log('LEGION');    3
        document.getElementById("roginfolog").style.backgroundImage="url('images/legionlogo.png')";
        document.getElementById("roglaptopname").innerHTML="LENOVO LEGION 9i";
        document.getElementById("roglaptopname").style.fontFamily='Legion';
        document.getElementById("roglaptopslogan").innerHTML="LIQUID COOLED. AI TUNED. YOUR FUTURE IS FORGED.";
        document.getElementById("roglaptopslogan").style.color= "rgb(0, 208, 255)";
        document.getElementById("roglaptopdescription").innerHTML="Experience the laptop that’s changing the entire PC gaming industry, with revolutionary liquid cooling tech, AI features, and more. Intel’s® latest hybrid architecture, paired with industry-leading features, delivers the ultimate gaming experience. Stream, create, and compete at the highest levels—Intel® Core™ processors push your gameplay beyond performance, giving you the power to do it all. GeForce RTX™ 40 Series Laptop GPUs deliver a quantum leap in performance with AI-powered DLSS 3. They enable lifelike virtual worlds with ray tracing and are thin, light, and quiet, thanks to Max-Q technologies.  ";
        document.getElementById("cpuname").innerHTML="Intel®Core™";
        document.getElementById("cpugen").innerHTML="i9-14900HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4090";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="165Hz Mini LED";
        document.getElementById("cpulogo").src="intellogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="displaylogo.png";
        document.getElementById("cpuname").style.color="rgb(0, 191, 255)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
    if(carouselImages[counter].id == 'aorus'){
        console.log('AORUS');    
        document.getElementById("roginfolog").style.backgroundImage="url('images/aoruslogo.png')";
        document.getElementById("roglaptopname").innerHTML="AORUS 17X";
        document.getElementById("roglaptopname").style.fontFamily='Aorus';
        document.getElementById("roglaptopslogan").innerHTML="THE FINELY CRAFTED FLAGSHIP GAMING LAPTOP";
        document.getElementById("roglaptopslogan").style.color= "rgb(255, 162, 0)";
        document.getElementById("roglaptopdescription").innerHTML="The new AORUS 17X is equipped with the 13th gen Intel® Core™ i9-13980HX processor and the max TGP NVIDIA® GeForce RTX™ 4090 laptop GPU, providing unbeatable performance. Dynamic Display Switch (DDS) technology and the market's highest-spec DDR5-5600 memory provide higher frame rates, and the powerful cooling technology allows the chassis to be unbelievably thin, dominating the gaming world with overwhelming performance. Enjoy sharp and precise game graphics through the AORUS 17X's high resolution and high refresh rate screen, which perfectly balances the QHD 240Hz sharp images and smoothness.";
        document.getElementById("cpuname").innerHTML="Intel®Core™";
        document.getElementById("cpugen").innerHTML="i9-13980HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4090";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="240Hz QHD";
        document.getElementById("cpulogo").src="intellogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="mediumdisplaylogo.png";
        document.getElementById("cpuname").style.color="rgb(0, 191, 255)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
    if(carouselImages[counter].id == 'predator'){
        console.log('PREDATOR'); 
        document.getElementById("roginfolog").style.backgroundImage="url('images/predatorlogo.png')";   
        document.getElementById("roglaptopname").innerHTML="PREDATOR HELIOS 18";
        document.getElementById("roglaptopname").style.fontFamily='Predator';
        document.getElementById("roglaptopslogan").innerHTML="FORGE YOUR GALACTIC DESTINY";
        document.getElementById("roglaptopslogan").style.color= "rgb(0, 255, 251)";
        document.getElementById("roglaptopdescription").innerHTML="Step into next-gen gaming with the Helios 18 AI gaming laptop / PC, powered by DLSS 3.5. Unleash peak performance with cutting-edge cooling, a radiant Mini LED1 display, and the precision of MagKey 3.0 keycaps: MagClick and MagSpeed. ntel® Core™ processors (14th Gen) feature newly optimized hybrid architecture and industry-leading technology that enables you to go beyond gaming and creation. With Intel, you can do it all. From progressing in the game to advancing in real life, Intel empowers you to be your best self. NVIDIA® GeForce RTX™ 40 Series Laptop GPUs are beyond fast for gamers and creators.";
        document.getElementById("cpuname").innerHTML="Intel®Core™";
        document.getElementById("cpugen").innerHTML="i9-14900HX";
        document.getElementById("gpuname").innerHTML="NVIDIA® GeForce";
        document.getElementById("gpugen").innerHTML="RTX™ 4090";
        document.getElementById("ssdname").innerHTML="PCIe® Gen 4x4";
        document.getElementById("ssdgen").innerHTML="2TB SSD";
        document.getElementById("memoryname").innerHTML="Display";
        document.getElementById("memorygen").innerHTML="250Hz Mini LED";
        document.getElementById("cpulogo").src="intellogo.png";
        document.getElementById("gpulogo").src="nvidialogo.png";
        document.getElementById("ssdlogo").src="ssdlogo.png";
        document.getElementById("displaylogo").src="bigdisplaylogo.png";
        document.getElementById("cpuname").style.color="rgb(0, 191, 255)";
        document.getElementById("gpuname").style.color="rgb(105, 249, 1)";
    }
});


  
  
  






