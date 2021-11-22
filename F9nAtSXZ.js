<script>
{
const checkbox = document.getElementById('othercheckbox');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
$('#otherfield').show();
  } else  
$('#otherfield').hide();
});
}

</script>

<script>
{
  const config = {
    inputClassName: "checkbox-field",

    displayClassName: "next3",
  };

  const inputs = document.getElementsByClassName(config.inputClassName);
  const displayElements = document.getElementsByClassName(config.displayClassName);

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", inputValuator);
  }
  function inputValuator() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].children[1].checked === true) {
        for (let i = 0; i < displayElements.length; i++) {
          displayElements[i].style.display = "flex";
          document.getElementById('continue3').style.display = "none";
        }
        return;
      }
    }
    for (let i = 0; i < displayElements.length; i++) {
      displayElements[i].style.display = "none";
      document.getElementById('continue3').style.display = "flex";
    }
  }
}
</script>

<script>
{
document.addEventListener('input', ({ target }) => {
    if (['p2-1', 'p2-2', 'p2-3', 'p2-4','p2-5','p2-6','p2-7'].includes(target.id)) {
        const allHaveValues = Array.from(document.querySelectorAll('#p2-1, #p2-2,#p2-3,#p2-4,#p2-5,#p2-6,#p2-7')).every(({ value }) => value);
        
        document.querySelector('#continue2').style.display = allHaveValues ? 'none' : 'block';
        document.querySelector('#next2').style.display = allHaveValues ? 'block' : 'none';
    }
});
}

{
document.addEventListener('input', ({ target }) => {
    if (['p4-1', 'p4-3', 'p4-4', 'p4-5'].includes(target.id)) {
        const allHaveValues = Array.from(document.querySelectorAll('#p4-1, #p4-3, #p4-4, #p4-5')).every(({ value }) => value);
        
        document.querySelector('#continue4').style.display = allHaveValues ? 'none' : 'block';
        document.querySelector('#next4').style.display = allHaveValues ? 'block' : 'none';
    }
});
}

{
document.addEventListener('input', ({ target }) => {
    if (['p5-4', 'p5-5'].includes(target.id)) {
        const allHaveValues = Array.from(document.querySelectorAll('#p5-4, #p5-5')).every(({ value }) => value);
        
        document.querySelector('#continue5').style.display = allHaveValues ? 'none' : 'block';
        document.querySelector('#next5').style.display = allHaveValues ? 'block' : 'none';
    }
});
}
{
document.addEventListener('input', ({ target }) => {
    if (['p6-1', 'p6-2','p6-3','p6-4','p6-5'].includes(target.id)) {
        const allHaveValues = Array.from(document.querySelectorAll('#p6-1, #p6-2, #p6-3, #p6-4, #p6-5')).every(({ value }) => value);
        
        document.querySelector('#continue10').style.display = allHaveValues ? 'none' : 'block';
        document.querySelector('#next10').style.display = allHaveValues ? 'block' : 'none';
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
    let showAnyBox = false;
    console.log("a");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].children[1].checked === true) {
        operations[i].style.display = "block";
        showAnyBox = true;
      } else {
        operations[i].style.display = "none";
      }
      let inputs = operations[i].querySelectorAll("input");
      for (let i2 = 0; i2 < inputs.length; i2++) {}
    }
    if (showAnyBox === false) {
      next9.style.display = "none";
      continue9.style.display = "block";
    } else {
      checkInputs();
    }
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
    document.addEventListener('input', ()=>{
      const checkbox1 = !!document.getElementById('Uber-Eats').checked;
      const checkbox2 = !!document.getElementById('Deliveroo').checked;
      const checkbox3 = !!document.getElementById('Just-Eat').checked;
      const checkbox4 = !!document.getElementById('othercheckbox').checked;
      const field1 = !!document.getElementById('otherfield').value;
      const allHaveValues = ( checkbox1 || checkbox2 || checkbox3 ) || (checkbox4 && field1);

      document.getElementById('continue1').style.display = allHaveValues ? 'none' : 'block';
      document.getElementById('next1').style.display = allHaveValues ? 'block' : 'none';
    })
}






{
document.addEventListener('input', ()=>{
 

  const rad1 = !!document.getElementById('supplys1').checked;
  const rad2 = !!document.getElementById('supplys2').checked;
  const supplys1 = document.getElementById('d1').checked
  const supplys2 = document.getElementById('d2').checked
  const supplys3 = document.getElementById('d3').checked
  const supplys4 = document.getElementById('d4').checked
  const supplys5 = document.getElementById('d5').checked
  const supplys6 = document.getElementById('d6').checked
  const supplys7 = document.getElementById('d7').checked
  const supplys8 = document.getElementById('d8').checked
  const supplys9 = document.getElementById('d9').checked
  const supplys10 = document.getElementById('d10').checked
  const supplys11 = document.getElementById('d11').checked
  const supplys12 = document.getElementById('d12').checked
  const supplys13 = document.getElementById('d13').checked
  const supplys14 = document.getElementById('d14').checked
  const supplys15 = document.getElementById('d15').checked
  const supplys16 = document.getElementById('d16').checked
  const supplys17 = document.getElementById('d17').checked
  const supplys18 = document.getElementById('d18').checked
  const supplys19 = document.getElementById('d19').checked
  const supplys20 = document.getElementById('d20').checked
  const supplys21 = document.getElementById('d21').checked

if (rad1) {
document.getElementById('alternativebox').style.display = 'none';
document.getElementById('next6').style.display = 'block';
document.getElementById('continue6').style.display = 'none';

}

if (rad2) {
document.getElementById('alternativebox').style.display = 'flex';
document.getElementById('next6').style.display = 'none';
document.getElementById('continue6').style.display = 'block';

}

if (rad2 && (supplys1 || supplys2 || supplys3 || supplys4 || supplys5 || supplys6 || supplys7 || supplys8 || supplys9 || supplys10 || supplys11 || supplys12 || supplys13 || supplys14 || supplys15 || supplys16 || supplys17 || supplys18 || supplys19 || supplys20 || supplys21)) {
document.getElementById('alternativebox').style.display = 'flex';
document.getElementById('next6').style.display = 'block';
document.getElementById('continue6').style.display = 'none';
}

else if (rad2 && (supplys1 || supplys2 || supplys3 || supplys4 || supplys5 || supplys6 || supplys7 || supplys8 || supplys9 || supplys10 || supplys11 || supplys12 || supplys13 || supplys14 || supplys15 || supplys16 || supplys17 || supplys18 || supplys19 || supplys20 || supplys21)) {
document.getElementById('alternativebox').style.display = 'none';
document.getElementById('next6').style.display = 'none';
document.getElementById('continue6').style.display = 'block';
document.getElementById('d1','d2','d3').reset();

}
})
}

{
    document.addEventListener('input', ()=>{
      const tf1 = !!document.getElementById('tf1').value;
      const tf2 = !!document.getElementById('tf2').value;
      const tf3 = !!document.getElementById('tf3').value;
      const tf4 = !!document.getElementById('tf4').value;
      const tf5 = !!document.getElementById('tf5').value;
      const p81 = !!document.getElementById('p8-1').value;
      const p82 = !!document.getElementById('p8-2').value;
      const p8check = !!document.getElementById('Tech-Delivery-Yes').checked;
      const p8check2 = !!document.getElementById('Tech-Delivery-No').checked;
      const techyes = (p81 && p82) && p8check;
      const techno = (p81 && p82) && p8check2;

if (techno) {
document.getElementById('tech-box').style.display = 'block';
document.getElementById('next8').style.display = 'none';
document.getElementById('continue8').style.display = 'block';
  } else if (techyes) {
document.getElementById('tech-box').style.display = 'none';
document.getElementById('next8').style.display = 'block';
document.getElementById('continue8').style.display = 'none';
  }
else {
document.getElementById('tech-box').style.display = 'none';
document.getElementById('next8').style.display = 'none';
document.getElementById('continue8').style.display = 'block';
}
 if( techno & tf1 && tf2 && tf3 && tf4 && tf5) {
document.getElementById('next8').style.display = 'block';
document.getElementById('continue8').style.display = 'none';

}
})
}
{
document.getElementById("chef1").addEventListener("change", function() {
  let v = parseInt(this.value);
  if (v < 1) this.value = 0;
  if (v > 12) this.value = 12;
});

document.getElementById("chef2").addEventListener("change", function() {
let chef1value = document.getElementById('chef1').value;
  let vv = parseInt(document.getElementById('chef2').value);
  if (vv < 1) this.value = 0;
  if (vv > chef1value) this.value = chef1value;
});
}
</script>