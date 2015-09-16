console.log('\'Allo \'Allo!');
function parse(spec) {
  console.log(spec);
  vg.parse.spec(spec, function(chart) {
    console.log(chart)
    var view = chart({ el:"#vis" });
    view.viewport(null)
      .renderer("svg")
      .update();
  });
}
parse("charts-specs/node-io-9.json");
