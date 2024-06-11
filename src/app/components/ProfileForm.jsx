import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  // this get user id from clerk
  const { userId } = auth();
  async function handleUpdateProfile(formData) {
    "use server";
    const username = formData.get("username");
    await db.query(
      `UPDATE profiles SET username = '${username}' WHERE clerk_id = '${userId}'`
    );
    revalidatePath("/");
  }
  return (
    <div>
      <h1>Update Profile</h1>
      <p>Welcome, please choose a username</p>
      <form action={handleUpdateProfile}>
        <input name="username" placeholder="username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
