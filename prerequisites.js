{
  const checkbox = document.getElementById("othercheckbox");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      $("#otherfield").show();
    } else $("#otherfield").hide();
  });
  {
    document.addEventListener("input", ({ target }) => {
      if (
        [
          "p2-1",
          "p2-2",
          "p2-3",
          "p2-4",
          "p2-5",
          "p2-6",
          "p2-7",
          "Location-Pin",
        ].includes(target.id)
      ) {
        const allHaveValues = Array.from(
          document.querySelectorAll(
            "#p2-1, #p2-2,#p2-3,#p2-4,#p2-5,#p2-6,#p2-7,#Location-Pin"
          )
        ).every(({ value }) => value);
        const hasfile = document.getElementById("Location-Pin").files.length;
        if (allHaveValues) {
          document.getElementById("continue2").style.display = "none";
          document.getElementById("next2").style.display = "block";
        } else {
          document.getElementById("next2").style.display = "none";
          document.getElementById("continue2").style.display = "block";
        }
      }
    });
  }
  const config = {
    inputClassName: "checkbox-field",
    displayClassName: "next3",
  };
  const inputs = document.getElementsByClassName(config.inputClassName);
  const displayElements = document.getElementsByClassName(
    config.displayClassName
  );
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", inputValuator);
  }
  function inputValuator() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].children[1].checked === true) {
        for (let i = 0; i < displayElements.length; i++) {
          displayElements[i].style.display = "flex";
          document.getElementById("continue3").style.display = "none";
        }
        return;
      }
    }
    for (let i = 0; i < displayElements.length; i++) {
      displayElements[i].style.display = "none";
      document.getElementById("continue3").style.display = "flex";
    }
  }
}
{
  document.addEventListener("input", ({ target }) => {
    if (["p4-1", "p4-3", "p4-4", "p4-5"].includes(target.id)) {
      const allHaveValues = Array.from(
        document.querySelectorAll("#p4-1, #p4-3, #p4-4, #p4-5")
      ).every(({ value }) => value);
      document.querySelector("#continue4").style.display = allHaveValues
        ? "none"
        : "block";
      document.querySelector("#next4").style.display = allHaveValues
        ? "block"
        : "none";
    }
  });
}
{
  document.addEventListener("input", ({ target }) => {
    if (["p5-4", "p5-5"].includes(target.id)) {
      const allHaveValues = Array.from(
        document.querySelectorAll("#p5-4, #p5-5")
      ).every(({ value }) => value);
      document.querySelector("#continue5").style.display = allHaveValues
        ? "none"
        : "block";
      document.querySelector("#next5").style.display = allHaveValues
        ? "block"
        : "none";
    }
  });
}
{
  document.addEventListener("input", ({ target }) => {
    if (["p6-1", "p6-2", "p6-3", "p6-4", "p6-5"].includes(target.id)) {
      const allHaveValues = Array.from(
        document.querySelectorAll("#p6-1, #p6-2, #p6-3, #p6-4, #p6-5")
      ).every(({ value }) => value);
      document.querySelector("#continue10").style.display = allHaveValues
        ? "none"
        : "block";
      document.querySelector("#next10").style.display = allHaveValues
        ? "block"
        : "none";
    }
  });
}
{
  const next9 = document.getElementById("next9");
  const continue9 = document.getElementById("continue9");
  const operations = document.getElementsByClassName("operations-box");
  const checkboxes = document.getElementsByClassName("ocd-check");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].children[1].addEventListener("change", updateCheckBox);
    const inputs = operations[i].querySelectorAll("input");
    for (let i2 = 0; i2 < inputs.length; i2++) {
      inputs[i2].addEventListener("input", checkInputs);
      inputs[i2].parentPackage = checkboxes[i];
    }
  }
  function updateCheckBox() {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].children[1].checked === true) {
        operations[i].style.display = "block";
      } else {
        operations[i].style.display = "none";
      }
      let inputs = operations[i].querySelectorAll("input");
      for (let i2 = 0; i2 < inputs.length; i2++) {}
    }
    checkInputs();
  }
  function checkInputs() {
    let allFilled = true;
    loopit: for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].children[1].checked === true) {
        const inputs = operations[i].querySelectorAll("input");
        for (let i2 = 0; i2 < inputs.length; i2++) {
          if (inputs[i2].value === "") {
            allFilled = false;
            break loopit;
          }
        }
      }
    }
    if (allFilled === true) {
      next9.style.display = "block";
      continue9.style.display = "none";
    } else {
      next9.style.display = "none";
      continue9.style.display = "block";
    }
  }
}
{
  document.addEventListener("input", () => {
    const checkbox1 = !!document.getElementById("Uber-Eats").checked;
    const checkbox2 = !!document.getElementById("Deliveroo").checked;
    const checkbox3 = !!document.getElementById("Just-Eat").checked;
    const checkbox4 = !!document.getElementById("othercheckbox").checked;
    const field1 = !!document.getElementById("otherfield").value;
    const allHaveValues =
      checkbox1 || checkbox2 || checkbox3 || (checkbox4 && field1);
    document.getElementById("continue1").style.display = allHaveValues
      ? "none"
      : "block";
    document.getElementById("next1").style.display = allHaveValues
      ? "block"
      : "none";
  });
}
{
  document.addEventListener("input", () => {
    const rad1 = !!document.getElementById("supplys1").checked;
    const rad2 = !!document.getElementById("supplys2").checked;
    const d1 = document.getElementById("d1").checked;
    const d2 = document.getElementById("d2").checked;
    const d3 = document.getElementById("d3").checked;
    const d4 = document.getElementById("d4").checked;
    const d5 = document.getElementById("d5").checked;
    const d6 = document.getElementById("d6").checked;
    const d7 = document.getElementById("d7").checked;
    const d8 = document.getElementById("d8").checked;
    const d9 = document.getElementById("d9").checked;
    const d10 = document.getElementById("d10").checked;
    const d11 = document.getElementById("d11").checked;
    const d12 = document.getElementById("d12").checked;
    const d13 = document.getElementById("d13").checked;
    const d14 = document.getElementById("d14").checked;
    const d15 = document.getElementById("d15").checked;
    const d16 = document.getElementById("d16").checked;
    const d17 = document.getElementById("d17").checked;
    const d18 = document.getElementById("d18").checked;
    const d19 = document.getElementById("d19").checked;
    const d20 = document.getElementById("d20").checked;
    const d21 = document.getElementById("d21").checked;
    if (rad1) {
      document.getElementById("alternativebox").style.display = "none";
      document.getElementById("next6").style.display = "block";
      document.getElementById("continue6").style.display = "none";
    }
    if (rad2) {
      document.getElementById("alternativebox").style.display = "flex";
      document.getElementById("next6").style.display = "none";
      document.getElementById("continue6").style.display = "block";
    }
    if (
      rad2 &&
      (d1 ||
        d2 ||
        d3 ||
        d4 ||
        d5 ||
        d6 ||
        d7 ||
        d8 ||
        d9 ||
        d10 ||
        d11 ||
        d12 ||
        d13 ||
        d14 ||
        d15 ||
        d16 ||
        d17 ||
        d18 ||
        d19 ||
        d20 ||
        d21)
    ) {
      document.getElementById("alternativebox").style.display = "flex";
      document.getElementById("next6").style.display = "block";
      document.getElementById("continue6").style.display = "none";
    } else if (
      rad2 &&
      (d1 ||
        d2 ||
        d3 ||
        d4 ||
        d5 ||
        d6 ||
        d7 ||
        d8 ||
        d9 ||
        d10 ||
        d11 ||
        d12 ||
        d13 ||
        d14 ||
        d15 ||
        d16 ||
        d17 ||
        d18 ||
        d19 ||
        d20 ||
        d21)
    ) {
      document.getElementById("alternativebox").style.display = "none";
      document.getElementById("next6").style.display = "none";
      document.getElementById("continue6").style.display = "block";
    }
  });
}
{
  document.addEventListener("input", () => {
    const tf1 = !!document.getElementById("tf1").value;
    const tf2 = !!document.getElementById("tf2").value;
    const tf3 = !!document.getElementById("tf3").value;
    const tf4 = !!document.getElementById("tf4").value;
    const tf5 = !!document.getElementById("tf5").value;
    const p81 = !!document.getElementById("p8-1").value;
    const p82 = !!document.getElementById("p8-2").value;
    const p8check = !!document.getElementById("Tech-Delivery-Yes").checked;
    const p8check2 = !!document.getElementById("Tech-Delivery-No").checked;
    const techyes = p81 && p82 && p8check;
    const techno = p81 && p82 && p8check2;
    if (techno) {
      document.getElementById("tech-box").style.display = "block";
      document.getElementById("next8").style.display = "none";
      document.getElementById("continue8").style.display = "block";
    } else if (techyes) {
      document.getElementById("tech-box").style.display = "none";
      document.getElementById("next8").style.display = "block";
      document.getElementById("continue8").style.display = "none";
    } else {
      document.getElementById("tech-box").style.display = "none";
      document.getElementById("next8").style.display = "none";
      document.getElementById("continue8").style.display = "block";
    }
    if (techno & tf1 && tf2 && tf3 && tf4 && tf5) {
      document.getElementById("next8").style.display = "block";
      document.getElementById("continue8").style.display = "none";
    }
  });
}
{
  {    
  document.getElementById("chef2").addEventListener("change", function () {
    let chef1value = document.getElementById("chef1").value;
    let chef2value = document.getElementById("chef2").value;
    let v = parseInt(document.getElementById("chef2").value);
    let cf1 = $("#cf1").show();
    let cf2 = $("#cf3").show();
    let cf3 = $("#cf3").show();
    let cf4 = $("#cf4").show();
    let cf5 = $("#cf5").show();
    let cf6 = $("#cf6").show();
    let cf7 = $("#cf7").show();
    let cf8 = $("#cf8").show();
    let cf9 = $("#cf9").show();
    let cf10 = $("#cf10").show();
    let continuecf1 = $("#continuecf1").hide();
    let continuecf2 = $("#continuecf2").hide();
    let continuecf3 = $("#continuecf3").hide();
    let continuecf4 = $("#continuecf4").hide();
    let continuecf5 = $("#continuecf5").hide();
    let nextcf1 = $("#nextcf1").show();
    let nextcf2 = $("#nextcf2").show();
    let nextcf3 = $("#nextcf3").show();
    let nextcf4 = $("#nextcf4").show();
    let nextcf5 = $("#nextcf5").show();
    if (v > chef1value) this.value = chef1value;
    if (v < 1) $(".chefbox").hide() && $("#cf1").hide();

    if (v === 1) { cf1 && $("#cf2").hide() && $("#cf3").hide() && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() && $("#continuecf1").show() && $("#nextcf1").hide() && $("#continuecf2").show() && $("#nextcf2").hide() && $("#continuecf3").show() && $("#nextcf3").hide() && $("#continuecf4").show ()&& $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 2) { cf1 && cf2 && $("#cf3").hide() && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() && $("#continuecf1").show() && $("#nextcf1").hide() && $("#continuecf2").show() && $("#nextcf2").hide() && $("#continuecf3").show() && $("#nextcf3").hide() && $("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 3) { cf1 && cf2 && cf3 && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() && $("#continuecf2").show() && $("#nextcf2").hide() && $("#continuecf3").show() && $("#nextcf3").hide() && $("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 4) { cf1 && cf2 && cf3 && cf4 && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide()  && continuecf1 && nextcf1 && continuecf2&& nextcf2 && $("#continuecf3").show() && $("#nextcf3").hide() && $("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 5) { cf1 && cf2 &&
 cf3 && cf4 && cf5 && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide()  && continuecf1 && nextcf1 && continuecf2&& nextcf2 && $("#continuecf3").show() && $("#nextcf3").hide() &&$("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 6) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide()  && continuecf1 && nextcf1 && continuecf2 && nextcf2 && continuecf3 && nextcf3 && $("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 7) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && $("#cf8").hide() && $("#cf9").hide()  && continuecf1 && nextcf1 && continuecf2 && nextcf2 && continuecf3 && nextcf3 && $("#continuecf4").show() && $("#nextcf4").hide() && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 8) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && $("#cf9").hide()  && continuecf1 && nextcf1 && continuecf2 && nextcf2 && continuecf3 && nextcf3 && continuecf4 && nextcf4 && $("#continuecf5").show() && $("#nextcf5").hide() } 

    if (v === 9) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && cf9 && continuecf1 && nextcf1 && continuecf2 && nextcf2 && continuecf3 && nextcf3 && $("#continuecf5").show() && $("#nextcf5").hide()  } 

  })}
  
  document.addEventListener("input", () => {

    let v = parseInt(document.getElementById("chef2").value);

    const cf1f1 = !!document.getElementById("cf1-f1").value;
    const cf1f2 = !!document.getElementById("cf1-f2").value;
    const cf1f3 = !!document.getElementById("cf1-f3").value;

    const cf2f1 = !!document.getElementById("cf2-f1").value;
    const cf2f2 = !!document.getElementById("cf2-f2").value;

    const cf3f1 = !!document.getElementById("cf3-f1").value;
    const cf3f2 = !!document.getElementById("cf3-f2").value;

    const cf4f1 = !!document.getElementById("cf4-f1").value;
    const cf4f2 = !!document.getElementById("cf4-f2").value;

    const cf5f1 = !!document.getElementById("cf5-f1").value;
    const cf5f2 = !!document.getElementById("cf5-f2").value;

    const cf6f1 = !!document.getElementById("cf6-f1").value;
    const cf6f2 = !!document.getElementById("cf6-f2").value;

    const cf7f1 = !!document.getElementById("cf7-f1").value;
    const cf7f2 = !!document.getElementById("cf7-f2").value;

    const cf8f1 = !!document.getElementById("cf8-f1").value;
    const cf8f2 = !!document.getElementById("cf8-f2").value;

    const cf9f1 = !!document.getElementById("cf9-f1").value;
    const cf9f2 = !!document.getElementById("cf9-f2").value;

    if ( (v === 1) && cf1f1 && cf1f2 && cf1f3 ) {
      document.getElementById("continuecf1").style.display = "none";
      document.getElementById("nextcf1").style.display = "none";
      document.getElementById("finishchef1").style.display = "block";
    } 

    if( ( v === 2) && cf1f1 && cf1f2 && cf1f3 ) {
      document.getElementById("continuecf1").style.display = "none";
      document.getElementById("nextcf1").style.display = "block";
      document.getElementById("finishchef1").style.display = "none";

    }

   if( ( v === 2) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 ) {
      document.getElementById("continuecf2").style.display = "none";
      document.getElementById("nextcf2").style.display = "none";
      document.getElementById("finishchef2").style.display = "block";

    }


if( ( v === 3) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 ) {
      document.getElementById("continuecf2").style.display = "none";
      document.getElementById("nextcf2").style.display = "none";
      document.getElementById("finishchef2").style.display = "block";

    }

if( ( v === 4) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 ) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "none";
      document.getElementById("finishchef3").style.display = "block";

    }

if( ( v === 5) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "none";
      document.getElementById("finishchef3").style.display = "block";

    }

if( ( v === 6) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 ) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "block";
      document.getElementById("finishchef3").style.display = "none";

    }

if( ( v === 6) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "none";
      document.getElementById("finishchef4").style.display = "block";

    }
if( ( v === 7) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "none";
      document.getElementById("finishchef4").style.display = "block";

    }
if( ( v === 8) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "block";
      document.getElementById("finishchef4").style.display = "none";

    }
if( ( v === 8) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 && cf8f1 && cf8f2 ) {
      document.getElementById("continuecf5").style.display = "none";
      document.getElementById("finishchef5").style.display = "block";

    }
if( ( v === 9) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 && cf8f1 && cf8f2 && cf9f1 && cf9f2 ) {
      document.getElementById("continuecf5").style.display = "none";
      document.getElementById("finishchef5").style.display = "block";

    }
})
      
{
  document.addEventListener("input", () => {
    const agree1 = document.getElementById("agree1").checked;
    const agree2 = document.getElementById("agree3").checked;
    if (agree1 && agree2) {
      $("#next12").show();
      $("#continue12").hide();
    } else {
      $("#next12").hide();
      $("#continue12").show();
    }
  });
}}
