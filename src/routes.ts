import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", (req, res) => {
  const authenticate = new AuthenticateUserController();
  authenticate.handle(res, req);
});

router.post("/messages", ensureAuthenticated, (req, res) => {
  const messageController = new CreateMessageController();
  messageController.handle(res, req);
});

router.get("/messages/last3", (req, res) => {
  const messageLast3Controller = new GetLast3MessagesController();
  messageLast3Controller.handle(res, req);
});

router.get("/profile", ensureAuthenticated, (req, res) => {
  const profileUserController = new ProfileUserController();
  profileUserController.handle(res, req);
});

export { router };
