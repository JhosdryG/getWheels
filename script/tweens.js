const controler = new ScrollMagic.Controller();

/*HEADER TWEENS*/
const headerTweens = () => {
  const tl = new TimelineLite();
  tl.addLabel("titles")
    .from(
      ".header .header__title, .header .header__subtitle",
      3,
      { opacity: 0 },
      "titles"
    )
    .from(".header .header__title", 1.5, { y: "10%" }, "titles")
    .from(".header .header__subtitle", 1.5, { y: "50%" }, "titles")
    .from(".header .header__subtext", 1.5, { opacity: 0, y: "40%" }, "-=1");
};
/* THE LASTESTS TWEENS */
const latestTweens = () => {
  let tl = new TimelineLite();

  tl.from(".latests .section-title", 1, { opacity: 0 });

  new ScrollMagic.Scene({
    triggerElement: "#latest",
    triggerHook: "onCenter",
    offset: -50,
    reverse: false,
  })
    .setTween(tl)
    .addTo(controler);

  modelArr = ["explorer", "silverado", "ct5"];

  modelArr.forEach((model) => {
    tl = new TimelineLite();

    /* LATEST HEADER TWEENS */

    tl.addLabel("latest header")
      .from(
        ".latest." + model + " .latest__title",
        1,
        { opacity: 0, y: "10%" },
        "latest header"
      )
      .from(
        ".latest." + model + " .latest__header__imgbox",
        1,
        { opacity: 0, rotation: "10deg" },
        "latest header"
      );

    new ScrollMagic.Scene({
      triggerElement: ".latest." + model,
      triggerHook: "onCenter",
      offset: 150,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);

    tl = new TimelineLite();

    tl.addLabel("latest text")
      .from(
        ".latest." + model + " .latest__header__title",
        0.7,
        { opacity: 0, y: "10%" },
        "latest text"
      )
      .from(
        ".latest." + model + " .latest__header__desc",
        0.5,
        { opacity: 0, y: "-10%" },
        "latest text"
      );

    new ScrollMagic.Scene({
      triggerElement: ".latest." + model,
      triggerHook: "onCenter",
      offset: 150,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);

    /* LATEST CHARATERISTICS TWEENS */

    let charArr = ["1", "2", "3"];

    charArr.forEach((char) => {
      tl = new TimelineLite();

      tl.addLabel("latest char")
        .from(".latest." + model + " .char-" + char + " .char__text", 0.05, {
          opacity: 0,
        })
        .from(
          ".latest." + model + " .char-" + char + " .char__imgbox",
          1,
          { opacity: 0 },
          "latest char"
        )
        .from(
          ".latest." + model + " .char-" + char + " .char__title",
          1,
          { opacity: 0, x: "10%" },
          "latest char"
        )
        .from(
          ".latest." + model + " .char-" + char + " .char__desc",
          1,
          { opacity: 0, y: "-10%" },
          "latest char"
        );

      new ScrollMagic.Scene({
        triggerElement: ".latest." + model + " .char.char-" + char,
        triggerHook: "onEnter",
        offset: 400,
        reverse: false,
      })
        .setTween(tl)
        .addTo(controler);
    });

    /* LATEST GALLERY TWEENS */
    tl = new TimelineLite();

    tl.from(".latest." + model + " .gallery__title", 1, {
      y: "20%",
      opacity: 0,
    });

    new ScrollMagic.Scene({
      triggerElement: ".latest." + model + " .gallery__title",
      triggerHook: "onCenter",
      offset: 180,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);

    tl = new TimelineLite();

    tl.staggerFrom(
      ".latest." + model + " .gallery__box",
      0.3,
      { scale: 0.5, opacity: 0 },
      0.15
    );

    new ScrollMagic.Scene({
      triggerElement: ".latest." + model + " .latest__gallery",
      triggerHook: "onCenter",
      offset: 60,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);

    tl = new TimelineLite();

    tl.from(".latest." + model + " .latest__footer", 1, { opacity: 0 });

    new ScrollMagic.Scene({
      triggerElement: ".latest." + model + " .latest__footer",
      triggerHook: "onEnter",
      offset: 250,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);
  });

  /* CHANGE BACKGROUND AND FONT COLORS*/

  /* CHANGE SILVERADO SECTION */

  new ScrollMagic.Scene({
    triggerElement: ".latest.silverado",
    triggerHook: "onLeave",
    offset: 0,
  })
    .setClassToggle(".latest.silverado", "to-light")
    .addTo(controler);

  /* CHANGE CT5 SECTION */

  new ScrollMagic.Scene({
    triggerElement: ".latest.ct5",
    triggerHook: "onLeave",
    offset: 0,
  })
    .setClassToggle(".latest.ct5", "to-wine")
    .addTo(controler);
};
/* LOOK BEAUTIFUL TWEENS */
const lookBeautifulTweens = () => {
  let tl = new TimelineLite();

  tl.from("#lookBeautiful .section-title", 0.6, { opacity: 0, y: "10%" });

  tl.addLabel("group-1");
  // Aston Martin
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(1) .box__img",
    0,
    { x: "-110%" },
    "group-1"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(1)",
      0.7,
      { width: "50%", x: "-100%", y: "-200%", opacity: 0 },
      { opacity: 1, x: "-100%", y: "0%" }
    )
    .to(".look-beautiful__grid__box:nth-of-type(1)", 0.7, { x: "100%" })
    .to(".look-beautiful__grid__box:nth-of-type(1)", 0.7, {
      x: "0%",
      width: "100%",
    })
    .to(".look-beautiful__grid__box:nth-of-type(1) .box__img", 0.7, {
      x: "0%",
    });

  //CITROEN DS
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(10) .box__img",
    0,
    { x: "110%" },
    "group-1"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(10)",
      0.7,
      { x: "300%", y: "200%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(10)", 0.7, { x: "0%" }, "-=2")
    .to(
      ".look-beautiful__grid__box:nth-of-type(10) .box__img",
      0.7,
      { x: "0%" },
      "-=1"
    );

  //LAMBORGHINI
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(7) .box__img",
    0,
    { x: "110%" },
    "group-1"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(7)",
      0.7,
      { x: "300%", opacity: 0 },
      { opacity: 1, x: "0%" },
      "-=2"
    )
    .to(
      ".look-beautiful__grid__box:nth-of-type(7) .box__img",
      0.7,
      { x: "0%" },
      "-=1"
    );

  //LICOLN CONTINENTAL
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(12) .box__img",
    0,
    { y: "110%" },
    "group-1"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(12)",
      0.7,
      { x: "100%", y: "200%", width: "50%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=2"
    )
    .to(
      ".look-beautiful__grid__box:nth-of-type(12)",
      0.7,
      { x: "0%", width: "100%" },
      "-=1"
    )
    .to(".look-beautiful__grid__box:nth-of-type(12) .box__img", 0.7, {
      y: "0%",
    });

  tl.addLabel("group-2");

  //BMW CS
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(8) .box__img",
    0,
    { y: "-110%" },
    "-=2"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(8)",
      0.7,
      { x: "-200%", opacity: 0 },
      { opacity: 1, x: "0%" },
      "-=2"
    )
    .to(".look-beautiful__grid__box:nth-of-type(8) .box__img", 0.7, {
      y: "0%",
    });

  //CAMARO
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(6) .box__img",
    0,
    { y: "110%" },
    "-=3"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(6)",
      0.7,
      { x: "200%", y: "-200%", opacity: 0 },
      { opacity: 1, x: "0%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(6)", 0.7, { y: "0%" }, "-=2")
    .to(
      ".look-beautiful__grid__box:nth-of-type(6) .box__img",
      0.7,
      { y: "0%" },
      "-=.7"
    );

  //HUMMER-H2
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(9) .box__img",
    0,
    { x: "-110%" },
    "-=2.5"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(9)",
      0.7,
      { x: "300%", y: "-200%", width: "33.33%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=2.5"
    )
    .to(".look-beautiful__grid__box:nth-of-type(9)", 0.7, { x: "0%" }, "-=1.5")
    .to(
      ".look-beautiful__grid__box:nth-of-type(9)",
      0.7,
      { width: "100%" },
      "-=.5"
    )
    .to(".look-beautiful__grid__box:nth-of-type(9) .box__img", 0.7, {
      x: "0%",
    });

  //PORSCHE 911
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(13) .box__img",
    0,
    { x: "110%" },
    "-=3"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(13)",
      0.7,
      { x: "200%", y: "-100%", width: "50%", opacity: 0 },
      { opacity: 1, x: "100%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(13)", 0.7, { y: "0%" }, "-=2")
    .to(".look-beautiful__grid__box:nth-of-type(13)", 0.7, { x: "0%" }, "-=1")
    .to(
      ".look-beautiful__grid__box:nth-of-type(13)",
      0.7,
      { width: "100%" },
      "-=.5"
    )
    .to(".look-beautiful__grid__box:nth-of-type(13) .box__img", 0.7, {
      x: "0%",
    });

  //CORVETTE
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(5) .box__img",
    0,
    { y: "-110%" },
    "-=3"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(5)",
      0.7,
      { x: "-200%", y: "-200%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(5)", 0.7, { x: "0%" }, "-=2")
    .to(
      ".look-beautiful__grid__box:nth-of-type(5) .box__img",
      0.7,
      { y: "0%" },
      "-=1"
    );

  //BMW 507
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(2) .box__img",
    0,
    { y: "110%" },
    "-=3"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(2)",
      0.7,
      { x: "-200%", y: "-100%", opacity: 0 },
      { opacity: 1, x: "0%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(2)", 0.7, { y: "0%" }, "-=2")
    .to(
      ".look-beautiful__grid__box:nth-of-type(2) .box__img",
      0.7,
      { y: "0%" },
      "-=1"
    );

  //MUSTANG GT
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(3) .box__img",
    0,
    { x: "110%" },
    "-=3"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(3)",
      0.7,
      { y: "-200%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=3"
    )
    .to(
      ".look-beautiful__grid__box:nth-of-type(3) .box__img",
      0.7,
      { x: "0%" },
      "-=2"
    );

  //BUGGATY TYPE 57
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(4) .box__img",
    0,
    { x: "110%" },
    "-=2"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(4)",
      0.7,
      { x: "-100%", y: "-200%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=2"
    )
    .to(".look-beautiful__grid__box:nth-of-type(4)", 0.7, { x: "0%" }, "-=1")
    .to(".look-beautiful__grid__box:nth-of-type(4) .box__img", 0.7, {
      x: "0%",
    });

  //MUSTANG 1964
  tl.to(
    ".look-beautiful__grid__box:nth-of-type(11) .box__img",
    0,
    { y: "-110%" },
    "-=4"
  )
    .fromTo(
      ".look-beautiful__grid__box:nth-of-type(11)",
      0.7,
      { x: "200%", y: "100%", width: "50%", opacity: 0 },
      { opacity: 1, y: "0%" },
      "-=3"
    )
    .to(".look-beautiful__grid__box:nth-of-type(11)", 0.7, { x: "0%" }, "-=2")
    .to(
      ".look-beautiful__grid__box:nth-of-type(11)",
      0.7,
      { width: "100%" },
      "-=1"
    )
    .to(
      ".look-beautiful__grid__box:nth-of-type(11) .box__img",
      0.7,
      { y: "0%" },
      "-=.4"
    );

  tl.timeScale(1.3);

  new ScrollMagic.Scene({
    triggerElement: "#lookBeautiful",
    triggerHook: "onCenter",
    offset: 100,
    reverse: false,
  })
    .setTween(tl)
    .addTo(controler);
};
/* A VEHICLE IS TWEENS */
const vehicleTweens = () => {
  tl = new TimelineLite();

  tl.from("#vehicle .section-title", 1, { opacity: 0, y: "10%" });

  new ScrollMagic.Scene({
    triggerElement: "#vehicle",
    triggerHook: "onCenter",
    offset: 0,
    reverse: false,
  })
    .setTween(tl)
    .addTo(controler);

  let oddCards = ["1", "3"];

  oddCards.forEach((odd) => {
    tl = new TimelineLite();

    let borderColor = getComputedStyle(
      document.querySelector("#vehicle .part.part-" + odd)
    ).borderColor;

    let backgroundColor = getComputedStyle(
      document.querySelector("#vehicle .part.part-" + odd)
    ).backgroundColor;

    tl.to(
      "#vehicle .part.part-" +
        odd +
        " .part__img,#vehicle .part.part-" +
        odd +
        " .part__content",
      0,
      { opacity: 0 },
      { opacity: 0 }
    )
      .fromTo(
        "#vehicle .part.part-" + odd,
        0.7,
        {
          scaleY: ".005",
          scaleX: "0",
          transformOrigin: "top left",
          backgroundColor: borderColor,
        },
        { scaleX: "1" }
      )
      .to("#vehicle .part.part-" + odd, 0.02, {
        backgroundColor: backgroundColor,
      })
      .to("#vehicle .part.part-" + odd, 1, { scaleY: "1" }, "-=.01")
      .to(
        "#vehicle .part.part-" +
          odd +
          " .part__img,#vehicle .part.part-" +
          odd +
          " .part__content",
        1,
        { opacity: 1 }
      );

    new ScrollMagic.Scene({
      triggerElement: "#vehicle .part.part-" + odd,
      triggerHook: "onCenter",
      offset: 0,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);
  });

  let evenCards = ["2", "4"];

  evenCards.forEach((even) => {
    tl = new TimelineLite();

    let borderColor = getComputedStyle(
      document.querySelector("#vehicle .part.part-" + even)
    ).borderColor;

    let backgroundColor = getComputedStyle(
      document.querySelector("#vehicle .part.part-" + even)
    ).backgroundColor;

    tl.to(
      "#vehicle .part.part-" +
        even +
        " .part__img,#vehicle .part.part-" +
        even +
        " .part__content",
      0,
      { opacity: 0 },
      { opacity: 0 }
    )
      .fromTo(
        "#vehicle .part.part-" + even,
        0.7,
        {
          scaleY: ".005",
          scaleX: "0",
          transformOrigin: "top right",
          backgroundColor: borderColor,
        },
        { scaleX: "1" }
      )
      .to("#vehicle .part.part-" + even, 0.02, {
        backgroundColor: backgroundColor,
      })
      .to("#vehicle .part.part-" + even, 1, { scaleY: "1" }, "-=.01")
      .to(
        "#vehicle .part.part-" +
          even +
          " .part__img,#vehicle .part.part-" +
          even +
          " .part__content",
        1,
        { opacity: 1 }
      );

    new ScrollMagic.Scene({
      triggerElement: "#vehicle .part.part-" + even,
      triggerHook: "onCenter",
      offset: 0,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controler);
  });
};
/* GET NEWS TWEENS */
const newsTweens = () => {
  tl = new TimelineLite();

  tl.from(".get-news .section-title", 1, { opacity: 0, y: "20%" });
  tl.staggerFrom(
    ".get-news .form .form__group",
    0.5,
    { opacity: 0, y: "20%" },
    0.3
  );

  new ScrollMagic.Scene({
    triggerElement: ".get-news",
    triggerHook: "onCenter",
    offset: 0,
    reverse: false,
  })
    .setTween(tl)
    .addTo(controler);
};

headerTweens();
latestTweens();
lookBeautifulTweens();
vehicleTweens();
newsTweens();
