import { redirect } from "next/navigation";

export default function LegacyApplySuccessRedirect() {
  redirect("/membership/apply/success");
}
