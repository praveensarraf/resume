$(document).ready(function () {
  $(".skills-prog li").each(function (i) {
      var $bar = $(this).find(".bar");
      var percent = $(this).data("percent");

      $bar.delay(i * 150).animate({
          width: percent + "%"
      }, 1000, "linear", function () {
          $bar.css({
              "transition-duration": ".5s"
          });
      });
  });

  $(".skills-soft li").each(function (i) {
      var $circle = $(this).find(".cbar");
      var $percentText = $(this).siblings("small");
      var percent = $(this).data("percent");
      var c = Math.PI * ($circle.attr("r") * 2);
      var cbar = (100 - percent) / 100 * c;

      $circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
      }).delay(i * 150).animate({
          strokeDashoffset: cbar
      }, 1000, "linear", function () {
          $circle.css({
              "transition-duration": ".3s"
          });
      });

      $percentText.prop("Counter", 0).delay(i * 150).animate({
          Counter: percent
      }, {
          duration: 1000,
          step: function (now) {
              $percentText.text(Math.ceil(now) + "%");
          }
      });
  });
});
