const db = require("../models");
const Controller = db.yandax;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Data
      const body = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
      };
    
      // Save Data in the database
      Controller.create(body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Data."
          });
        });
  
};

// Retrieve all Data from the database.
exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
      
        Controller.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving data."
            });
          });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Controller.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Data with id=" + id
      });
    });
};

// Find a single Data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Controller.findByPk(id)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message : err.message
    });
  });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Controller.update(req.body,
      {where : {id : id}
    })
    .then(num => {
      if(num == 1){
        res.send({
          message : "Data Updated Successfully"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message : err.message
      })
    })
};

// Delete all Data from the database.
exports.deleteAll = (req, res) => {
  Controller.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Data were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all datas."
      });
    });  
};

// Find all published Data
exports.findAllPublished = (req, res) => {
    //var condition = req.params.published == true;
    Controller.findAll({
      where : { published : true }})
      .then(data => {
          res.send(data);
      })
      .catch(err =>{
        res.status(500).send({
          message : err.message
        })
      })
};
