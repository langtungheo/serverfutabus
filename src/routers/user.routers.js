const express = require('express');
const { createUser, userLogin, uploadUserAvatar, getAllUser, getDetailUser, updateUser, createTicket, getAllticket} = require('../controllers/user.controllers');
const { authentice } = require('../middleware/ath/authentice');
const { authorize } = require('../middleware/ath/authorize');
const { uploadAvatar } = require('../middleware/uploadfiles/uploadfiles');
const { arrAdmin } = require('../utils/globalconstant');
const userRouter = express();


userRouter.post("/ticket", authentice,createTicket);
userRouter.get("/ticket", authentice, getAllticket)


userRouter.post("/login", userLogin);
userRouter.put("/upload-avatar", authentice, uploadAvatar("avatar"),uploadUserAvatar);
userRouter.get("/:id", authentice, authorize(arrAdmin), getDetailUser)
userRouter.put("/:id", authentice, authorize(arrAdmin), updateUser)
userRouter.post("/",createUser);
userRouter.get("/", authentice, authorize(arrAdmin),getAllUser);

module.exports = {
    userRouter
}