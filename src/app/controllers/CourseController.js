const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {

//   index(req, res, next) {
//     Course.find({})
//     .then(courses => {
//       res.render('home',{
//         courses: mutipleMongooseToObject(courses)
//       });
//     })
//     .catch(next);
//   }

  // GET /search
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug})
        .then(course => {
          res.render('courses/show',{course: mongooseToObject(course)});
        })
        .catch(next)
  }
  // GET courses/create
  create(req, res, next) {
    res.render('courses/create')
    
  }
  
  // POST courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.idvideo}/hq720.jpg`;
    const course = new Course(formData);
    course.save()
       .then(() => res.redirect('/'))
       .catch(error => {

       });  
  }

// GET courses/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
        .then(course =>res.render('courses/edit',{
          course: mongooseToObject(course)
        }))
        .catch(next);
  }

  // PUT courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
  }
}
module.exports = new CourseController();
