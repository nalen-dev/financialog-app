"server-only"

import { cookies } from "next/headers";

export async function getUserName(params) {
      const cookiesStore = await cookies();
      const cookie = cookiesStore.get("username");
     return cookie.value;
    
}