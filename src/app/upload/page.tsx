import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import UploadForm from "./UploadForm";
import styles from "./UploadForm.module.css";
import { authOptions } from "@/lib/auth";

export default async function UploadPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Force user to log in before uploading
    redirect("/login?callbackUrl=/upload");
  }

  return (
    <div className={styles.container}>
      <UploadForm />
    </div>
  );
}
