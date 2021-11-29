function renderTemplate() {
  let template_html = document.getElementById("project-template").innerHTML;
  let template = Handlebars.compile(template_html);
  let projectDataObject = projectData;
  let testCourseHtml = template(projectDataObject);
  document.getElementById("projects").innerHTML = testCourseHtml;
}
