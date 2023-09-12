exports.create = async (req, res) => {
     res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Portfolio Create function'
          })
 };

exports.read = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Portfolio Read function'
          })
};

exports.delete = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Portfolio Delete functionn'
          })
 };

exports.update = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Portfolio Update function'
          })
 };