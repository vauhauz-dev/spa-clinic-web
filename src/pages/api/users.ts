import {handler, setPost} from "../../lib/api-handler";

setPost((req: any, res: any) => {
    console.log('Test post')
})


export default handler