const addCareerDb = require("../../database/queries/add_career");
const addCareerGradesDb = require("../../database/queries/add_career_grades");

const addCareerController = (request, response) => {
  const careerNames = [
    "account_balance",
    "local_hospital",
    "important_devices",
    "build",
    "face",
    "gavel",
    "language",
    "pets",
    "theaters",
    "work",
    "trending_up",
    "shopping_cart",
    "movie",
    "business",
    "import_contacts",
    "ring_volume",
    "flight",
    "attach_money",
    "insert_photo",
    "laptop_mac",
    "security",
    "brush",
    "music_note",
    "color_lens",
    "camera_alt",
    "local_florist",
    "directions_bus",
    "restaurant",
    "spa",
    "school",
    "poll",
  ];

  const colorNames = [
    { id: "color1", color: "#FF8A65" },
    { id: "color2", color: "#81C784" },
    { id: "color3", color: "#4DD0E1" },
    { id: "color4", color: "#4FC3F7" },
    { id: "color5", color: "#E57373" },
    { id: "color6", color: "#F06292" },
    { id: "color7", color: "#BA68C8" },
    { id: "color8", color: "#7986CB" },
  ];

  const universities = [
    { name: "ariel", title: "Ariel University", id: 1 },
    { name: "gurion", title: "Ben Gurion University of the Negev", id: 2 },
    { name: "bar-ilan", title: "Bar-Ilan University", id: 3 },
    { name: "haifa", title: "University of Haifa", id: 4 },
    { name: "hebrew", title: "Hebrew University of Jerusalem", id: 5 },
    { name: "open", title: "Open University of Israel", id: 6 },
    {
      name: "technion",
      title: "Technion - Israel Institute of Technology",
      id: 7,
    },
    { name: "tel-aviv", title: "Tel Aviv University", id: 8 },
    { name: "weizmann", title: "Weizmann Institute of Science", id: 9 },
  ];
  response.render("addCareer", { careerNames, colorNames, universities });
};

const addCareer = async (request, response) => {
  try {
    const [{ id: careerId }] = await addCareerDb(request.body);
    const careerIds =
      typeof request.body["uni-ids"] === "string"
        ? [request.body["uni-ids"]]
        : request.body["uni-ids"];

    const uniQueries = careerIds.map(id => {
      const grade_bagrut = request.body[`grade_bagrut_${id}`] || null;
      const grade_psychometric =
        request.body[`grade_psychometric_${id}`] || null;
      const grade_tawjihi = request.body[`grade_tawjihi_${id}`] || null;
      addCareerGradesDb(Number(id), careerId, {
        grade_bagrut,
        grade_psychometric,
        grade_tawjihi,
      });
    });
    await Promise.all(uniQueries);
    response.redirect("/__/add/career");
  } catch (error) {
    console.log(error);
    response.send("Add career failed...");
  }
};

module.exports = {
  addCareerController,
  addCareer,
};
