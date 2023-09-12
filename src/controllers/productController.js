exports.create = async (req, res) => {
     res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Product Create function'
          })
 };

exports.read = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Product Read function'
          })
};

exports.delete = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Product Delete function'
          })
 };

exports.update = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Product Update function'
          })
 };