# Path 18

Designed to give young adults in Israel a greater exposure to a wide variety of career paths. We also show users specific Universities they can apply to with their current grades.

### Contributors

[@veredrec](https://github.com/veredrec)

[@matthewdking](https://github.com/matthewdking)

[@finnhodgkin](https://github.com/finnhodgkin)

### Problem Statement:
* Young people have little exposure to the variety of jobs and careers paths they could pursue.
* Uncertainty around career prospects.
* Little knowledge of the path to take to get a specific job.

### Run the app

Clone the repository
```
git clone https://github.com/facn2/path-18-app.git
```
Install packages
```
npm install
```
Start app
```
npm start
```
Run tests
```
npm test
```

### Technologies

+ [create-react-app](https://github.com/facebookincubator/create-react-app)
+ [redux](https://redux.js.org/)
+ [PostgreSQL](https://www.postgresql.org/)

### Database schemas

**users**

| user_id | first_name | last_name  | email | grade_bagrut | grade_psychometric | grade_tawjihi |
| ------- |:----------:|:----------:|:-----:|:------------:|:------------------:|:-------:|
|         |            |            |       |              |                    |         |

**admins**

| admin_id | first_name | last_name  | email |
| -------- |:----------:|:----------:|:-----:|
|          |            |            |       |

**careers**

| career_id | title   | title_ar| title_he | tagline | tagline_ar | tagline_he | description | description_ar | description_he | image_url | salary_start | salary_ten_year | icon_url |
| --------- |:-------:|:-------:|:--------:|:-------:|:----------:|:----------:|:-----------:|:-----------:|:-----------:|:---------:|:-----------:|:---------------:|:--------:|
|           |         |         |          |         |            |            |             |             |             |           |             |                 |          |

**universities**

| uni_id  | name    | name_ar | name_he | location | location_ar | location_he |
| ------- |:-------:|:-------:|:-------:|:--------:|:-----------:|:-----------:|
|         |         |         |         |          |             |             |

**users_careers**

| user_id | career_id |
| ------- |:---------:|
|         |           |


**universities_careers**

| uni_id  | career_id | grade_bagrut | grade_psychometric | grade_tawjihi | study_years |
| ------- |:---------:|:------------:|:------------------:|:-------:|:-----------:|
|        |          |              |                    |         |             |
