import { eventBus } from "../../lib/emmiter";
import { sendBusinnesPropousalConfirmation, sendBusinnesProposal, sendResumeEmail, sendResumeEmailConfirmation } from "./email.controller";

eventBus.on("sendProposal", async (data) => {
  await sendBusinnesProposal(data);
  await sendBusinnesPropousalConfirmation(data);

  console.log("📩 Mail enviado después de que el controller terminó.");
});

eventBus.on("sendResume", async (data) => {
  await sendResumeEmail(data);
  await sendResumeEmailConfirmation(data);

  console.log("📩 Mail enviado después de que el controller terminó.");
})