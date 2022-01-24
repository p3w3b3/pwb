{
$(function () {
  $("#daterange").daterangepicker({
    autoUpdateInput: false,
    autoApply: true,
  });

  $("#daterange").on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("MM/DD/YYYY") +
        " - " +
        picker.endDate.format("MM/DD/YYYY")
    );
    if (
      !!document.querySelector("#Type").value &&
      document.querySelector("#Timeframe").value == "Temporary"
    ) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });
});

$("#daterange").on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});

document.querySelector("#mydas").addEventListener("click", function () {
  location.assign(
    "https://www.peckwaterbrands.com/operations/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
  );
});


  document.addEventListener("change", () => {
    if (document.querySelector("#Timeframe").value == "Temporary") {
      $("#tr").show();
    } else if (document.querySelector("#Timeframe").value == "Permanent") {
      $("#tr").hide();
    }



    if (!!document.querySelector("#Type").value && !document.querySelector("#daterange").value &&  document.querySelector("#Timeframe").value == "Temporary") {

{
    for (let i = 1; i < 6; i++)
      document.querySelector("#m" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#t" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#w" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#tt" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ff" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#s" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ss" + i).disabled = true;
  }




}

    if (
      !!document.querySelector("#Type").value &&
      document.querySelector("#Timeframe").value == "Permanent"
    ) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });

  document.getElementById("m5").addEventListener("change", () => {
    if (document.getElementById("m5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#m" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;
    }
  });

  document.getElementById("t5").addEventListener("change", () => {
    if (document.getElementById("t5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#t" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;
    }
  });

  document.getElementById("w5").addEventListener("change", () => {
    if (document.getElementById("w5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#w" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;
    }
  });

  document.getElementById("tt5").addEventListener("change", () => {
    if (document.getElementById("tt5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#tt" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;
    }
  });

  document.getElementById("ff5").addEventListener("change", () => {
    if (document.getElementById("ff5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#f" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;
    }
  });

  document.getElementById("s5").addEventListener("change", () => {
    if (document.getElementById("s5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#s" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;
    }
  });

  document.getElementById("ss5").addEventListener("change", () => {
    if (document.getElementById("ss5").checked) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = true;
      for (let i = 1; i < 6; i++) document.querySelector("#ss" + i).value = " ";
    } else {
      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });

  {
    let timeset = 0;
    $(".mainfieldopstime-r1").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "09:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }

  {
    let timeset = 0;
    $(".mainfieldopstime-r2").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "18:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }

  // here

  {
    for (let i = 1; i < 6; i++)
      document.querySelector("#m" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#t" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#w" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#tt" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ff" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#s" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ss" + i).disabled = true;
  }

}
