const { connection } = require("../configurations/db");

const fetchAllUsers = async(req, res) => {
  try {
    await connection.query("SELECT * FROM users", (err, result) => {
      if (err) {
        res.status(400).json({
          message: err.message,
        });
      }else{
        res.status(200).json({
          message: 'Selected success',
          data: result
        })
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

//failed
const fetchUserById = async(req, res) => {
  try {
    const id = req.params.id;
    await connection.query(`SELECT * FROM users where id = "${id}"`, (err, result) => {
      if (err) {
        res.status(400).json({
          message: err.message,
        });
      }else{
        res.status(200).json({
          message: 'Selected success',
          data: result
        })
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

const insertUser = async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const sallary = req.body.sallary;
    await connection.query(`INSERT INTO users (id, name, age, sallary) VALUES ('${id}', '${name}', ${age}, ${sallary})`, (err, result) => {
      if (err) {
        res.status(400).json({
          message: err.message,
        });
      }else{
        res.status(200).json({
          message: 'Inserted success',
          data: result
        })
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

//failed
const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const name = req.body.name
    await connection.query(`UPDATE users SET name = "${name}" WHERE id = "${id}"`, (err, result) => {
      if (err) {
        res.status(400).json({
          message: err.message,
        });
      }else{
        res.status(200).json({
          message: 'Updated success',
          data: result
        })
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await connection.query(`DELETE FROM users WHERE id = "${id}"`, (err, result) => {
      if (err) {
        res.status(400).json({
          message: err.message,
        });
      }else{
        res.status(200).json({
          message: 'Deleted success',
          data: result
        })
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};


module.exports = {
  fetchAllUsers,
  fetchUserById,
  insertUser,
  updateUser,
  deleteUser
}