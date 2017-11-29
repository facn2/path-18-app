var careerObj = {
    title_ar: '',
    title_he: '',
    tagline_ar: '',
    tagline_he: '',
    description_ar: '',
    description_he: '',
    image_url: '',
    salary_start: '',
    salary_ten_year: '',
    icon_url: ''
  };

handleSubmit(event) {
    event.preventDefault();
    var {
      title_ar,
      title_he,
      tagline_ar,
      tagline_he,
      description_ar,
      description_he,
      image_url,
      salary_start,
      salary_ten_year,
      icon_url
    } = event.target.elements;

    var CareerData = {
      title_ar: title_ar.value,
      title_he: title_he.value,
      tagline_ar: tagline_ar.value,
      tagline_he: tagline_he.value,
      description_ar: description_ar.value,
      description_he: description_he.value,
      image_url: image_url.value,
      salary_start: salary_start.value,
      salary_ten_year: salary_ten_year.value,
      icon_url: icon_url.value
    };
    console.log('The form inputs: ', CareerData);
    try {
      var res = await axios.post('/sendCareer', CareerData);
      if (res.data === 'done') {
        console.log(res.statusCode);
        window.location.href = '/';
      } else {
        window.location.href = '/404';
      }
    } catch (err) {
      console.log('this is the err: ', err);
      window.location.href = '/404';
    }
  }
