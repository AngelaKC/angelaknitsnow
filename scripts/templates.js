function renderTemplate() {
  let template_html = document.getElementById("project-template").innerHTML;
  let template = Handlebars.compile(template_html);
  let projectDataObject = projectData;
  let testCourseHtml = template(projectDataObject);
  document.getElementById("projects").innerHTML = testCourseHtml;
}
// https://handlebarsjs.com/guide/block-helpers.html#conditionals

Handlebars.registerHelper("if_eq", function (category, value, options) {
  if (category == value) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
