const addCareerDb = require('../../database/queries/add_career');

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
    { name: 'haifa', title: 'Haifa' },
    { name: 'technion', title: 'Technion' },
    { name: 'hebrew', title: 'Hebrew' },
    { name: 'tel-aviv', title: 'Tel Aviv' },
    { name: 'arab', title: 'Arab American' },
    { name: 'gurion', title: 'Ben Gurion' },
  ];
  response.render('addCareer', { careerNames, colorNames, universities });
};

const addCareer = (request, response) => {
  addCareerDb(request.body, (err, res) => {
    if (err) {
      response.send(
        '<h1>Sorry, there was a problem submitting the form. Please try again!</h1>'
      );
    }
    response.redirect('/');
  });
};

module.exports = {
  addCareerController,
  addCareer,
};
