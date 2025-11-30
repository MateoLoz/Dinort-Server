import { eventBus } from "../../lib/emmiter";
import { sendBusinnesPropousalConfirmation, sendBusinnesProposal } from "./email.controller";

eventBus.on("sendProposal", async (data) => {
  await sendBusinnesProposal(data);
  await sendBusinnesPropousalConfirmation(data);

  console.log("📩 Mail enviado después de que el controller terminó.");
});