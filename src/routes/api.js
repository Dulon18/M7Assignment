const express=require('express');
const UserController=require('../controllers/userController');
const AdminController=require('../controllers/adminController');
const SubAdminController=require('../controllers/subAdminController');
const PostController=require('../controllers/postController');
const router = express.Router();

// user route
router.get("/user/create",UserController.create);
router.get("/user/read",UserController.read);
router.get("/user/update",UserController.update);
router.get("/user/delete",UserController.delete);

// admin route
router.get("/admin/create",AdminController.create);
router.get("/admin/read",AdminController.read);
router.get("/admin/update",AdminController.update);
router.get("/admin/delete", AdminController.delete);

// subAdmin route
router.get("/subAdmin/create",SubAdminController.create);
router.get("/subAdmin/read",SubAdminController.read);
router.get("/subAdmin/update",SubAdminController.update);
router.get("/subAdmin/delete", SubAdminController.delete);

// post route
router.get("/post/create",PostController.create);
router.get("/post/read",PostController.read);
router.get("/post/update",PostController.update);
router.get("/post/delete", PostController.delete);

module.exports=router;