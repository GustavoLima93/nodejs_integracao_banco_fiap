import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const routeFreeList = ['POST-/user', 'POST-/user/signin']
    const validateRoute = `${request.method}-${request.routerPath}`

    if (routeFreeList.includes(validateRoute)) return

    await request.jwtVerify()
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' })
  }
}
