const data = [
  {
    id: "1",
    imageLink: "Heart.webp",
    name: "Artificial Heart",
    intro: "",
    detail1: "Modern medicine is more advanced in saving lives like transplant organs, tissue, cells, and one of the most incredible inventions that change your mind is artificial Heart. This device is designed to replicate the function of the human heart, pumping blood through the body. In this page, we will figure out Who invented? How does invention work? and is this invention used in medicine nowadays?",
    detail2: " One of the first creators who invented the artificial heart was Paul Winchell. He was not only an inventor but also a famous voice actor in America. In 1963, he got a patent for his artificial heart design. He later gave the rights to his invention to a medical school to help doctors save lives. Later, in the 1980s, Robert Jarvik made a working artificial heart called the Jarvik-7. It was the first artificial heart used in humans. This was a big step in medical science, helping people live longer.",
    detail3: "Jarvik-7 was made of Dacron polyester, plastic, and aluminum. The Jarvik-7 had an internal power system that regulated the pump through a system of compressed air hoses that entered the heart through the chest. The air hoses were connected to the chambers. The heart’s power system drove the pumps, which pumped blood through the patients’ body. In 1982, the first patient, Seattle dentist Barney Clark, lived for 112 days after the Jarvik 7 was implanted into his chest cavity. However, the system was open to infection, so Clark and subsequent Jarvik 7 recipients got sick. He had to be kept on blood thinners to prevent clots and strokes. Clark died from multiple organ failure, but the Jarvik 7 was still beating when he passed away.",
    detail4: "Today, artificial hearts are much better than before. They are smaller, safer and more like a real heart. Some artificial hearts are used for a short time to help patients wait for a real heart transplant. Others can be used for a longer time if a person cannot get a transplant.",
    detail5: "In conclusion, the artificial heart is a machine that helps people when their real heart cannot work. It was first invented by Paul Winchell and later improved by Robert Jarvik. Today, artificial heart is smaller, safer and can replace a human heart. Today, it continues to improve with new technology. In the future, artificial hearts may become even more common and even closer to a real human heart. This amazing invention shows how science and innovation can bring hope to people around the world.",
    img1: "https://media.newyorker.com/photos/60391a6e1dd9cbccd27ed18b/master/w_1920,c_limit/210308_r37991.jpg",
    img_name1: "Artificial Heart",
    img2: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/22173-total-artificial-heart",
    img_name2: "",
  },
  {
    id: "2",
    imageLink: "Kidney.jpg",
    name: "Artificial Kidney",
    detail1: "Modern medicine is more advanced in saving lives through organ transplants, tissue replacements, and medical machines. One of the most important inventions that may change the future of kidney treatment is the artificial kidney. This device is made to do the job of real kidneys by cleaning waste from the blood. On this page, we will learn: Who invented it? How does it work? And is it used in medicine today? ",
    detail2: "One of the people who helped develop the artificial kidney was Willem Kolff, a Dutch doctor. In the 1940s, he built the first dialysis machine, which became the start of artificial kidney treatment. His machine helped patients whose kidneys had failed. Later, many scientists and doctors improved his design to create better and safer dialysis machines.",
    detail3: "The artificial kidney works by removing waste and extra water from the blood, just like a real kidney. The most common type is the dialysis machine, which connects to the patient’s body through tubes. Blood goes into the machine, gets cleaned through a special filter, and then goes back into the body. In recent years, scientists are also working on a wearable artificial kidney, which is smaller and portable, so patients can move around while getting treatment.",
    detail4: "Today, artificial kidneys (especially dialysis machines) are used in hospitals and homes to help millions of people with kidney failure. Though it’s not a full replacement like a real kidney, it helps people stay alive and feel better. Scientists are now developing bioartificial kidneys, which may be implanted in the body one day and work like a real organ.",
    detail5: "In conclusion, the artificial kidney is a life-saving machine that helps people whose real kidneys cannot work. It started with the invention of Willem Kolff and has improved with technology. Today, artificial kidneys are safer and smaller, and they may become even better in the future. This invention shows how medical science is helping people live longer and healthier lives.",
    img1: "https://tse1.mm.bing.net/th?id=OIP.0e4OYJWYV7LrGj5_ceD-8gHaEK&pid=Api&P=0&h=180",
    img_name1: "Artificial Kidney",
    img2: "http://rric.weebly.com/uploads/2/5/0/7/25076562/3774488_orig.png",
    img_name2: "",
  },
    {
    id: "",
    imageLink: "",
    name: "",
    detail1: "",
    detail2: "",
    detail3: "",
    detail4: "",
    detail5: "",
    img1: "",
    img_name1: "",
    img2: "",
    img_name2: "",
  },
    {
    id: "",
    imageLink: "",
    name: "",
    detail1: "",
    detail2: "",
    detail3: "",
    detail4: "",
    detail5: "",
    img1: "",
    img_name1: "",
    img2: "",
    img_name2: "",
  },
    {
    id: "",
    imageLink: "",
    name: "",
    detail1: "",
    detail2: "",
    detail3: "",
    detail4: "",
    detail5: "",
    img1: "",
    img_name1: "",
    img2: "",
    img_name2: "",
  },
    {
    id: "",
    imageLink: "",
    name: "",
    detail1: "",
    detail2: "",
    detail3: "",
    detail4: "",
    detail5: "",
    img1: "",
    img_name1: "",
    img2: "",
    img_name2: "",
  },
];

let product_div = document.getElementById("main");

function loadProducts(products) {
  for (let i = 0; i < products.length; i++) {
    var productElement = document.createElement("div");
    productElement.classList.add("siuu");
    let output = ` 
    <div class="ma"
    style=" height: 330px; width: 325px; border: 3px solid black; margin-top: 30px; margin-bottom: 30px; border-radius: 10px; ">
    <img src="${products[i].imageLink}" , alt=""
        style="width: 320px; height: 201px; border-radius: 10px 10px 0px 0px; " id="img" />
    <h3 class="mu" style="font-size: 20px; margin-top: 15px; margin-right: 10px; ">${products[i].name}</h3>

    </div>
    `;
    productElement.addEventListener("click", function (event) {
      var productId = event.currentTarget.getAttribute("data-product-id");
      window.location.href = `productweb.html?id=${products[i].id}`;
    });
    productElement.setAttribute("data-product-id", products[i].id);
    product_div.appendChild(productElement);
    productElement.innerHTML += output;
  }
}

loadProducts(data);

productElement.addEventListener("click", function (event) {
  var productId = event.currentTarget.getAttribute("data-product-id");
  window.location.href = `productweb.html?id=${productId}`;
});
