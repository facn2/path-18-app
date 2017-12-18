const addCareerDb = require('../../database/queries/add_career');
const addCareerGradesDb = require('../../database/queries/add_career_grades');

const addCareerController = (request, response) => {
  const careerNames = [
    'account_balance',
    'local_hospital',
    'important_devices',
    'build',
    'face',
    'gavel',
    'language',
    'pets',
    'theaters',
    'work',
    'trending_up',
    'shopping_cart',
    'movie',
    'business',
    'import_contacts',
    'ring_volume',
    'flight',
    'attach_money',
    'insert_photo',
    'laptop_mac',
    'security',
    'brush',
    'music_note',
    'color_lens',
    'camera_alt',
    'local_florist',
    'directions_bus',
    'restaurant',
    'spa',
    'school',
    'poll',
  ];

  const colorNames = [
    { id: 'color1', color: '#2672a6' },
    { id: 'color2', color: '#9a26a6' },
    { id: 'color3', color: '#a62672' },
    { id: 'color4', color: '#a62632' },
    { id: 'color5', color: '#FFD54F' },
    { id: 'color6', color: '#FF8A65' },
    { id: 'color7', color: '#81C784' },
    { id: 'color8', color: '#4DD0E1' },
    { id: 'color9', color: '#4FC3F7' },
    { id: 'color10', color: '#E57373' },
    { id: 'color11', color: '#F06292' },
    { id: 'color12', color: '#BA68C8' },
    { id: 'color13', color: '#7986CB' },
  ];

  const universities = [
    { name: 'haifa', title: 'Haifa', id: 1 },
    { name: 'technion', title: 'Technion', id: 2 },
    { name: 'hebrew', title: 'Hebrew', id: 3 },
    { name: 'tel-aviv', title: 'Tel Aviv', id: 4 },
    { name: 'arab', title: 'Arab American', id: 5 },
    { name: 'gurion', title: 'Ben Gurion', id: 6 },
  ];
  response.render('addCareer', { careerNames, colorNames, universities });
};

const addCareer = async (request, response) => {
  try {
    const [{ id: careerId }] = await addCareerDb(request.body);
    const careerIds =
      typeof request.body['uni-ids'] === 'string'
        ? [request.body['uni-ids']]
        : request.body['uni-ids'];

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
    response.redirect('/__/add/career');
  } catch (error) {
    console.log(error);
    response.send('Add career failed...');
  }
};

module.exports = {
  addCareerController,
  addCareer,
};
