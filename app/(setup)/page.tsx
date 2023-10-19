import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { PERMANENT_REDIRECT_STATUS } from "@/node_modules/next/dist/shared/lib/constants";
import { InititalModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where:{
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (server){
        return redirect(`/servers/${server.id}`)
    }
    return ( <InititalModal /> );
}
 
export default SetupPage;