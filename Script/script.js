const categorys = document.querySelector(".categorys");
const backImg = document.getElementById("CategoryContent1");

const categoryList = [
  {
    img: "../Images/Category/Rectangle 11.png",
    text: [
      "HYPOALLERGENIC AND MEDICAL NUTRITION",
      `In the last quarter of 2021, worrisome reports
      of infant formula shortages began circulating in
      the media owing to COVID-19 pandemic-induced 
      supply chain and distribution issues. However, 
      more widespread concerns about scarcity emerged in 
      February 2022, when Abbott Nutrition, the largest supplier 
      of infant formula in the United States, voluntarily recalled
      select batches of Similac, Alimentum, and EleCare powdered formulas
      and closed their Sturgis, Michigan manufacturing plant.`,

      `For food-allergic patients, hypoallergenic formulas (HFs) are
      medically indicated, often a primary component of the diet and 
      essential for patient safety, health, nutrition, and overall
      well-being. Yet, food allergy is not included among the
      conditions mandated for coverage under federal health 
      programs and private health insurance. The 2022 infant 
      formula crisis has affected many North American families and 
      has particularly influenced patients with food allergies who 
      rely on a limited number of safe HF brands to safely meet their 
      nutritional needs for growth and development.`,
    ],
    photo: [
      "../Images/Category/single2/img.png",
      "../Images/Category/single2/rs=w_400,cg_true.png",
      "../Images/Category/single2/nutrileon-multivitamin-tablets-174.png",
      "../Images/Category/single2/multivitamin-mineral-and-herbal-tablet-228.png",
      "../Images/Category/single2/s-l1200.png",
      "../Images/Category/single2/1.png",
      "../Images/Category/single2/img1.png",
      "../Images/Category/single2/img2.png",
    ],
  },
  {
    img: "../Images/Category/jamie-matocinos-WAYY2WoGb8w-unsplash 1.png",
    text: [
      "PURIFICATION AND REDUCTION WEIGHTS",
      `In nutrition, diet is the sum of food consumed by
    a person or other organism. Although humans are omnivores,
    each culture and each person holds some food preferences or
    some food taboos. This may be due to personal tastes or ethical 
    reasons. Individual dietary choices may be more or less healthy.`,

      `The best diet that will forever help get rid 
    of extra pounds and improve health is a proper, 
    balanced diet. And you can eat everything! 
    This diet has only one drawback: it is for life. 
    And that's exactly what a lot of people don't like. 
    Therefore, we are looking for weight loss options 
    for a couple of days, a week or a month. It cannot 
    be denied that certain results can be achieved 
    in such a short period of time. Just choosing a certain 
    diet, you need to responsibly weigh all the pros and cons.`,
    ],
    photo: [
      "../Images/Category/single1/img.png",
      "../Images/Category/single1/louis-hansel-phEaeqe555M-unsplash 1.png",
      "../Images/Category/single1/alexander-schimmeck-ks5flsI1mNo-unsplash 2.png",
      "../Images/Category/single1/kirill-tonkikh-laZqmDV5UJE-unsplash 1.png",
      "../Images/Category/single1/eiliv-aceron-uzdfBCKwKTk-unsplash 1.png",
      "../Images/Category/single1/1.png",
      "../Images/Category/single1/img1.png",
      "../Images/Category/single1/img2.png",
    ],
  },
  {
    img: "../Images/Category/Rectangle 12.png",
    text: [
      "SPORTS NUTRITION AND MAINTENANCE FORMS",
      `Nutrition is very important to every athlete,
        and at high levels, where talent and training
        are relatively equal, it can be the difference
        between winning and losing. The American College 
        of Sports Medicine (ACSM) published data they 
        complied from multiple sources on recommended
        nutrition for athletes in which they state,
        “that physical activity, athletic performance,
        and recovery from exercise are enhanced by 
        optimal nutrition.”`,

      `Macronutrients are nutrients that provide calories or energy to the body. The purpose of macronutrients is to promote healthy cellular growth, metabolism, and to maintain normal bodily functions. The macronutrients, as suggested by the name “macro,” are needed in the body in large amounts to provide the full and proper effect.
      There are three types of macronutrients: carbohydrates, proteins, and lipids.`,
    ],
    photo: [
      "../Images/Category/single3/img.png",
      "../Images/Category/single3/shutterstock_382697113.png",
      "../Images/Category/single3/iStock-1363588189-1.png",
      "../Images/Category/single3/sdal;fjlkwjfklasdf'.png",
      "../Images/Category/single3/images.png",
      "../Images/Category/single3/1.png",
      "../Images/Category/single3/img1.png",
      "../Images/Category/single3/img2.png",
    ],
  },
  {
    img: "../Images/Category/dragan-djukic-e300vqunXzY-unsplash 1.png",
    text: [
      "VEGETARIAN AND LEAN NUTRITION",
      `Vegetarian nutrition is the set of health-related challenges and advantages of vegetarian diets.
      Appropriately planned vegetarian diets are healthful and nutritionally adequate for all stages of
      the human life cycle, including during pregnancy, lactation, infancy, childhood, and adolescence.
      However, vegetarian diets deficient in vitamin B12 or calories may compromise children's health
      and development.`,

      `Vegetarians may get vitamin B12 from eggs and dairy products (milk, cheese, etc.); for some,
      this is adequate, while others may still remain B12-deficient. More broadly, according to the
      Academy of Nutrition and Dietetics, even the form of vitamin B12 sourced from animal products 
      is protein-bound and not as easily digested as supplements, especially as people age, and 
      therefore B12 supplementation is recommended for everyone over the age of 50. Pregnant and
      lactating vegetarian mothers—and breastfed infants if the vegetarian mother's diet is not 
      supplemented—should also use supplements, whether B12-pills, B12-injections, or B12-fortified
      foods, if they don't get adequate vitamin B12 from animal products like eggs or dairy.`,
    ],
    photo: [
      "../Images/Category/single4/img.png",
      "../Images/Category/single4/banner-2021-05-03T160813.672.png",
      "../Images/Category/single4/gfdjhgf.png",
      "../Images/Category/single4/jgfkhgv.png",
      "../Images/Category/single4/main-qimg-91ab0e7ab963bc46114e754eed4e3105-pjlq.png",
      "../Images/Category/single4/1.png",
      "../Images/Category/single4/img1.png",
      "../Images/Category/single4/img2.png",
    ],
  },
];

categoryList.forEach((item) => {
  let div = document.createElement("div");
  div.className = "categoryCart";
  div.innerHTML = `<img src="${item.img}" />
                   <h3>${item.text[0]}</h3>`;
  div.addEventListener("click", () => {
    backImg.style.display = "none";
    document.querySelector(".pagePosition").innerHTML = `
    <a href="../index.html">Home</a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="12"
      viewBox="0 0 35 12"
      fill="none"
    >
      <path
        opacity="0.6"
        d="M34.5303 6.53033C34.8232 6.23744 34.8232 5.76256 34.5303 5.46967L29.7574 0.696699C29.4645 0.403806 28.9896 0.403806 28.6967 0.696699C28.4038 0.989593 28.4038 1.46447 28.6967 1.75736L32.9393 6L28.6967 10.2426C28.4038 10.5355 28.4038 11.0104 28.6967 11.3033C28.9896 11.5962 29.4645 11.5962 29.7574 11.3033L34.5303 6.53033ZM0 6.75L34 6.75L34 5.25L0 5.25L0 6.75Z"
        fill="black"
      />
    </svg>
    <a href="Category.html">Categories</a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="12"
      viewBox="0 0 35 12"
      fill="none"
    >
      <path
        opacity="0.6"
        d="M34.5303 6.53033C34.8232 6.23744 34.8232 5.76256 34.5303 5.46967L29.7574 0.696699C29.4645 0.403806 28.9896 0.403806 28.6967 0.696699C28.4038 0.989593 28.4038 1.46447 28.6967 1.75736L32.9393 6L28.6967 10.2426C28.4038 10.5355 28.4038 11.0104 28.6967 11.3033C28.9896 11.5962 29.4645 11.5962 29.7574 11.3033L34.5303 6.53033ZM0 6.75L34 6.75L34 5.25L0 5.25L0 6.75Z"
        fill="black"
      />
    </svg>
    <a>${item.text[0]}</a>`;
    document.getElementById("CategoryContent2").innerHTML = `
    <section class="singleTitleSection">
        <img src="${item.photo[0]}" />
        <div>
            <h1>${item.text[0]}<h1/>
            <p>${item.text[1]}<p/>
        <div/>
    </section>
    <section class="singleImgSection">
    <img src="${item.photo[1]}" />
    <img src="${item.photo[2]}" />
    <img src="${item.photo[3]}" />
    <img src="${item.photo[4]}" />
    </section>
    <section class="singleInfoSection">
      <p>${item.text[2]}<p/>
      <img src="${item.photo[5]}">
    </section>
    <section class="singlePhotoSection">
      <img src="${item.photo[6]}">
      <img src="${item.photo[7]}">
    </section>
    `;
  });
  categorys.appendChild(div);
});
