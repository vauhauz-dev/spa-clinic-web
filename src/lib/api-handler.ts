import { NextApiRequest, NextApiResponse } from "next"

const functions: { post: (...args: any[]) => void } = {
    post: () => {}
}

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    switch (req.method) {
        case 'POST': functions.post(req, res)
    }
    res.status(200).json({ name: "test" })
}

export function setPost(fn: any) {
    functions.post = fn;
}