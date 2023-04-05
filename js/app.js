// ---------------------------------------
//  Nice Select Plugin
// ---------------------------------------
$(document).ready(function () {
  $(".select").niceSelect();
});

// ---------------------------------------
//  (Select2) Multi Select Plugin
// ---------------------------------------
var multiselect = jQuery("#sectorSelect").multiselect({
  columns: 1,
  placeholder: "Sector",
  search: true,
});

// ---------------------------------------
//  Logic for Step # 5 - Selection etc
// ---------------------------------------
$(document).ready(function () {
  // Initialize select2
  $("#SelExample").select2();
  $(".select2-selection__rendered").text("Country");

  // Search the Sector
  $(".search-sector").keyup(function () {
    $(".ms-options").addClass("show");
    let namesLI = document.getElementsByClassName("ms-reflow");
    let searchQuery = $(this).val().toLowerCase();
    for (let index = 0; index < namesLI.length; index++) {
      const name = namesLI[index].textContent.toLowerCase();
      if (name.includes(searchQuery)) {
        namesLI[index].style.display = "block";
      } else {
        namesLI[index].style.display = "none";
      }
    }

    // Show and Hide Reset icon
    if ($(".search-sector").val() != "") {
      $(".reset-input").addClass("show");
    } else {
      $(".reset-input").removeClass("show");
    }
  });

  // Browse the Sector
  $(document).change(function () {
    $(".search-sector").val($(".ms-reflow.selected").text());

    // Show and Hide Reset icon
    if ($(".search-sector").val() != "") {
      $(".reset-input").addClass("show");
    } else {
      $(".reset-input").removeClass("show");
    }
  });

  // Hide Dropdown on Selecting option
  $(".ms-reflow").click(function (e) {
    $(".ms-options").removeClass("show");
  });

  // Reset input and selection on Cick
  $(".reset-input").click(function (e) {
    $(".ms-options").removeClass("show");
    $(".search-sector").val("");
    $(this).removeClass("show");
    $(".ms-reflow").removeClass("selected");

    let namesLI = document.getElementsByClassName("ms-reflow");
    let searchQuery = "";
    for (let index = 0; index < namesLI.length; index++) {
      const name = namesLI[index].textContent.toLowerCase();
      if (name.includes(searchQuery)) {
        namesLI[index].style.display = "block";
      } else {
        namesLI[index].style.display = "none";
      }
    }
  });

  // Browse the Sector
  $(".search-sector-by-browse").click(function (e) {
    e.stopPropagation();
    $(".ms-options").addClass("show");
  });
});

// Cliking outside the dropdown
$(document).click(function (e) {
  var $target = $(e.target);
  if (!$target.closest(".input-has-btn").length && !$target.hasClass("input-has-btn") && !$target.closest(".ms-options").length && !$target.hasClass("ms-options")) {
    $(".ms-options").removeClass("show");
  }
});
