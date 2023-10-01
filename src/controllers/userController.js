exports.create = async (req, res) => {
     res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To user Create function'
          })
 };

exports.read = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To user Read function'
          })
};

exports.delete = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome user Delete functionn'
          })
 };

exports.update = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To user Update function'
          })
 };