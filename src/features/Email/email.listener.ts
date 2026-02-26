import { eventBus } from "../../lib/emmiter";
import { sendBusinnesPropousalConfirmation, sendBusinnesProposal, sendResumeEmail, sendResumeEmailConfirmation } from "./email.controller";

eventBus.on("sendProposal", async (data) => {
  await sendBusinnesProposal(data);
  await sendBusinnesPropousalConfirmation(data);
  console.log("📩 Mails de propuestas enviados!");
});

eventBus.on("sendResume", async (data) => {
  await sendResumeEmail(data);
  await sendResumeEmailConfirmation(data);

  console.log("📩 Mail de curriculums enviados!");
})