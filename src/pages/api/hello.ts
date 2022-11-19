import { NextApiRequest, NextApiResponse } from "next";
import {handler, setPost} from "../../lib/api-handler";

setPost((req: any, res: any) => {
    console.log('Test hello')
})

export default handler
